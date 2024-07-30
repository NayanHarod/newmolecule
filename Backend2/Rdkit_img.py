import io
import base64
from rdkit import Chem
from rdkit.Chem import Draw
import pic50_prediction

def bytesio_to_base64(bytesio_obj):
    return base64.b64encode(bytesio_obj.getvalue()).decode('utf-8')

def generate_molecule_image(image_size=(400, 400)):
    final_list = []
    data = pic50_prediction.main()
    for i in data:
        x = i['mol_name']
        mol = Chem.MolFromSmiles(x)

        Chem.rdDepictor.Compute2DCoords(mol)
        img = Draw.MolToImage(mol, size=image_size)
        
        img_io = io.BytesIO()
        img.save(img_io, 'PNG')
        img_io.seek(0)

        i["img_path"] = bytesio_to_base64(img_io)  # Convert BytesIO to base64 string
        final_list.append(i)
        
    return final_list


