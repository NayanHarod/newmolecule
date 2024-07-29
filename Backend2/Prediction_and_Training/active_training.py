import pandas as pd
from rdkit import Chem
from rdkit.Chem import AllChem
from rdkit.ML.Cluster import Butina
from rdkit import DataStructs
import numpy as np
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import roc_auc_score

# Load the data
df = pd.read_csv('all_combined_pic50.csv')
data = df[["canonical_smiles", "pIC50"]]

# Filter active and inactive compounds based on pIC50 values
actives = data[data['pIC50'] >= 6].reset_index(drop=True)

# Adjust the sample size to fit your dataset
sample_size = min(10000, len(data[data['pIC50'] < 6]))
inactives = data[data['pIC50'] < 6].sample(n=sample_size, random_state=42).reset_index(drop=True)

# Generate ECFP6 fingerprints
def generate_fingerprint(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol is not None:
        fp = AllChem.GetMorganFingerprintAsBitVect(mol, 3)  # ECFP6
        return fp
    else:
        return None

actives['Fingerprint'] = actives['canonical_smiles'].apply(generate_fingerprint)

# Filter out invalid fingerprints
actives = actives[actives['Fingerprint'].notnull()]

# Calculate similarity matrix
fps = list(actives['Fingerprint'])
dists = []
nfps = len(fps)
for i in range(1, nfps):
    sims = DataStructs.BulkTanimotoSimilarity(fps[i], fps[:i])
    dists.extend([1-x for x in sims])

# Cluster using Butina algorithm
clusters = Butina.ClusterData(dists, nfps, 0.4, isDistData=True)

# Assign clusters to test, validation, and training sets
clusters = sorted(clusters, key=len, reverse=True)
test_clusters, val_clusters, train_clusters = [], [], []
for i in range(len(clusters)):
    if i % 6 == 0:
        test_clusters.append(clusters[i])
    elif i % 6 == 1:
        val_clusters.append(clusters[i])
    else:
        train_clusters.append(clusters[i])

# Combine the clusters into respective sets
test_set = [item for sublist in test_clusters for item in sublist]
val_set = [item for sublist in val_clusters for item in sublist]
train_set = [item for sublist in train_clusters for item in sublist]

# Ensure the indices are from the original DataFrame
actives['Set'] = 'train'
actives.loc[actives.index[test_set], 'Set'] = 'test'
actives.loc[actives.index[val_set], 'Set'] = 'val'

# Assign inactive compounds randomly to the sets
inactives['Fingerprint'] = inactives['canonical_smiles'].apply(generate_fingerprint)
inactives = inactives[inactives['Fingerprint'].notnull()]
inactives['Set'] = np.random.choice(['train', 'val', 'test'], size=len(inactives), p=[4/6, 1/6, 1/6])

# Combine actives and inactives
data = pd.concat([actives, inactives])

# Convert fingerprints to numpy arrays
def convert_fp_to_array(fp):
    arr = np.zeros((1,), dtype=np.int32)
    DataStructs.ConvertToNumpyArray(fp, arr)
    return arr

data['Fingerprint'] = data['Fingerprint'].apply(convert_fp_to_array)

# Prepare training data
X_train = np.array([fp for fp, s in zip(data['Fingerprint'], data['Set']) if s == 'train'])
y_train = np.array([1 if pIC50 >= 6 else 0 for s, pIC50 in zip(data['Set'], data['pIC50']) if s == 'train'])

# Ensure there are enough splits for cross-validation
n_splits = min(5, len(X_train))  # Set the number of splits to the smaller value

# SVM with Gaussian kernel
svm = SVC(kernel='rbf', probability=True)

# Grid search for optimal C and Gamma
param_grid = {'C': [0.1, 1, 10], 'gamma': [1e-3, 1e-4, 1e-5]}
grid_search = GridSearchCV(svm, param_grid, scoring='roc_auc', cv=n_splits)
grid_search.fit(X_train, y_train)

best_svm = grid_search.best_estimator_

# Prepare validation data
X_val = np.array([fp for fp, s in zip(data['Fingerprint'], data['Set']) if s == 'val'])
y_val = np.array([1 if pIC50 >= 6 else 0 for s, pIC50 in zip(data['Set'], data['pIC50']) if s == 'val'])

# Evaluate on validation set
y_pred_val = best_svm.predict_proba(X_val)[:, 1]
val_roc_auc = roc_auc_score(y_val, y_pred_val)

# Prepare test data
X_test = np.array([fp for fp, s in zip(data['Fingerprint'], data['Set']) if s == 'test'])
y_test = np.array([1 if pIC50 >= 6 else 0 for s, pIC50 in zip(data['Set'], data['pIC50']) if s == 'test'])

# Evaluate on test set
y_pred_test = best_svm.predict_proba(X_test)[:, 1]
test_roc_auc = roc_auc_score(y_test, y_pred_test)

# print("Validation ROC-AUC:", val_roc_auc)
# print("Test ROC-AUC:", test_roc_auc)


# ROC-AUC score for validation set is 0.8034553998116418
# ROC-AUC score for test set is 0.8203548338783355
