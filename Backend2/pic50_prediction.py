import pandas as pd
from rdkit import Chem
from rdkit.Chem import AllChem
from rdkit import DataStructs
import numpy as np
import joblib
import active_prediction

# Function to generate ECFP6 fingerprint from SMILES
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

# Function to predict pIC50 for a new SMILES string using the trained SVR model
def predict_pic50(smiles, model):
    # Generate fingerprint for the new compound
    fp = generate_fingerprint(smiles)
    if fp is not None:
        # Convert fingerprint to numpy array
        fp_array = convert_fp_to_array(fp)
        # Predict pIC50 value
        predicted_pic50 = model.predict([fp_array])[0]
        return predicted_pic50
    else:
        raise ValueError("Invalid SMILES string")

# # Load the trained SVR model from the pickle file
# best_svr = joblib.load('best_svr_model.pkl')

# # Example usage with a new SMILES string
# new_smiles = "CCO"  # Replace with the SMILES string of the new compound
# predicted_pic50 = predict_pic50(new_smiles, best_svr)

# print(f"Predicted pIC50 is: {predicted_pic50:.2f}")


def main():
    main_list = []
    # Load the trained model from a pickle file
    best_svr = joblib.load('/home/multi-sy-22/Desktop/newmolecule/Backend2/models_active/ic50_active_models/best_svr_model.pkl')

    data = active_prediction.main()
    for i in data :
        mol = i['mol_name']

        predicted_pic50 = predict_pic50(mol, best_svr)
        i['pic50']  = predicted_pic50
        main_list.append(i)    
    return main_list
    



# res = main()
# print('------------------------------',res)