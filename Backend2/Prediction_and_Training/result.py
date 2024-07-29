import torch
from rdkit import Chem
from Prediction_and_Training import model
from Prediction_and_Training import data_structs


def load_model(checkpoint_path, vocab_path):
    voc = data_structs.Vocabulary(init_from_file=vocab_path)
    model1 = model.RNN(voc)
    model1.rnn.load_state_dict(torch.load(checkpoint_path))
    return model1, voc

def generate_smiles(model, voc,filepath, num_samples=10):
    model.rnn.eval()
    with torch.no_grad():
        seqs, likelihood, _ = model.sample(num_samples)
    smiles_list = []
    for seq in seqs.cpu().numpy():
        smile = voc.decode(seq)
        if Chem.MolFromSmiles(smile):
            smiles_list.append(smile)

    def read_file_to_list(file_path):
   
        with open(file_path, 'r') as file:
            data_list = file.read().splitlines()  # Reads all lines into a list, removing newline characters
        return data_list

    def remove_values_from_list(filepath):
        new_list = smiles_list
        data_list = read_file_to_list(filepath)
        """Removes values from values_to_check that are present in data_list"""
        # Use a list comprehension to filter out values
        filtered_values = [value for value in new_list if value not in data_list]
        return filtered_values  
    final_smiles_list = remove_values_from_list(filepath)
    return final_smiles_list
          
    
    
    


def res_fun():
    checkpoint_path = "/home/multi-sy-22/Desktop/newmolecule/Backend2/Prediction_and_Training/Prior.ckpt"
    vocab_path = "/home/multi-sy-22/Desktop/newmolecule/Backend2/Prediction_and_Training/Voc"
    filepath = "/home/multi-sy-22/Desktop/newmolecule/Backend2/data/all_combined.txt"
    model, voc = load_model(checkpoint_path, vocab_path)
    num_samples = 10
    new_smiles = generate_smiles(model, voc,filepath,num_samples)

    return new_smiles

result = res_fun()
print(result)
    
    





