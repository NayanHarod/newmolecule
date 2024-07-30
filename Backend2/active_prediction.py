import pandas as pd
from rdkit import Chem
from rdkit.Chem import AllChem
from rdkit import DataStructs
import numpy as np
import joblib  # Import joblib for loading the model
import result

# Function to generate ECFP6 fingerprint
def generate_fingerprint(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol is not None:
        fp = AllChem.GetMorganFingerprintAsBitVect(mol, 3)  # ECFP6
        return fp
    else:
        return None

# Function to convert fingerprint to numpy array
def convert_fp_to_array(fp):
    arr = np.zeros((1,), dtype=np.int32)
    DataStructs.ConvertToNumpyArray(fp, arr)
    return arr

# Define the function to classify a new compound
def classify_new_compound(smiles, model):
    # Generate fingerprint for the new compound
    fp = generate_fingerprint(smiles)
    if fp is not None:
        # Convert fingerprint to numpy array
        fp_array = convert_fp_to_array(fp)
        
        # Predict probability of being active
        probability_active = model.predict_proba([fp_array])[:, 1]
        
        # Determine the classification (e.g., if probability > 0.5, classify as active)
        predicted_class = 1 if probability_active > 0.5 else 0
        
        return predicted_class, probability_active[0]
    else:
        raise ValueError("Invalid SMILES string")

# # Load the trained model from a pickle file
# best_svm = joblib.load('best_svm_model.pkl')

# # usage of the function
# # Replace with the SMILES string of the new compound
# new_smiles = "CCC(C)C[C@H](NC(=O)C[C@H](O)[C@H](Cc1ccccc1)NC(=O)[C@H](CC(C)C)NC(C)=O)[C@@H](O)CC(=O)N[C@H](C(=O)NCc1ccc(C(=O)O)cc1)C(C)C"
# predicted_class, probability = classify_new_compound(new_smiles, best_svm)

# print(f"Predicted class: {'Active' if predicted_class == 1 else 'Inactive'}")
# print(f"Probability of being active: {probability:.2f}")

def main():
    final_molecule  = []
    best_svm = joblib.load('/home/multi-sy-22/Desktop/newmolecule/Backend2/models_active/ic50_active_models/best_svm_model.pkl')

    smiles = result.res_fun()
    print("smilessss",smiles)
    for i in smiles:

    
        predicted_class, probability = classify_new_compound(i, best_svm)
        Molclass = 'Active' if predicted_class == 1 else 'Inactive'
        probability = int(probability * 100) / 100.0
        data  = {"mol_name": i,"Molclass":Molclass,"probability":probability}

        final_molecule.append(data)
    return final_molecule



# res = main()
# print(res)

