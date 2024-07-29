from flask import Flask, request, jsonify
import json
import uuid, requests
# import aws_content_uploader
# import myutils
import os
import glob
import requests
import asyncio
import nest_asyncio
from flask_cors import CORS, cross_origin
from Prediction_and_Training import pic50_prediction


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/mol', methods=['POST'])
def molecule():
    if request.method == 'POST':

        output = pic50_prediction.main()
        response = dict()
        response['status'] = '200'
        response['result'] = output
        return jsonify(response)
    else:
        response = dict()
        response['status'] = "500"
        response['result'] = "Some_Problem_In_Input_Path"
        return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4005)