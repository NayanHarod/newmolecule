import pandas as pd
from rdkit import Chem
from rdkit.Chem import AllChem
from rdkit import DataStructs
import numpy as np
from sklearn.svm import SVR
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.metrics import mean_squared_error
import joblib

# Load the dataset
df = pd.read_csv('all_combined_pic50.csv')
data = df[["canonical_smiles", "pIC50"]]

# Generate ECFP6 fingerprints
def generate_fingerprint(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol is not None:
        fp = AllChem.GetMorganFingerprintAsBitVect(mol, 3)  # ECFP6
        return fp
    else:
        return None

data['Fingerprint'] = data['canonical_smiles'].apply(generate_fingerprint)

# Filter out invalid fingerprints
data = data[data['Fingerprint'].notnull()]

# Convert fingerprints to numpy arrays
def convert_fp_to_array(fp):
    arr = np.zeros((1,), dtype=np.int32)
    DataStructs.ConvertToNumpyArray(fp, arr)
    return arr

data['Fingerprint'] = data['Fingerprint'].apply(convert_fp_to_array)

# Prepare training and test data
X = np.array(list(data['Fingerprint']))
y = data['pIC50'].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# SVR with Gaussian kernel
svr = SVR(kernel='rbf')

# Grid search for optimal C and Gamma
param_grid = {'C': [0.1, 1, 10,100], 'gamma': [1e-3, 1e-4, 1e-5, 2e-5]}
grid_search = GridSearchCV(svr, param_grid, scoring='neg_mean_squared_error', cv=5)
grid_search.fit(X_train, y_train)

best_svr = grid_search.best_estimator_
joblib.dump(best_svr, 'best_svr_model.pkl')

# Evaluate on test set
y_pred_test = best_svr.predict(X_test)
test_mse = mean_squared_error(y_test, y_pred_test)

# print("Test MSE:", test_mse)


# we get the MSE on test set of 0.6785494200635904