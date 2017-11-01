import sys
import database
from flask import Flask, jsonify, request, redirect, render_template
import requests
import json
import flask
app = Flask(__name__)
from flask_cors import CORS
CORS(app)
@app.route('/getMemeName', methods=['GET'])
def getName():
	print(str(request.args.get('name')))
	return json.dumps(database.get_memes_by_name(str(request.args.get('name'))))




@app.route('/getMemeNameGood', methods=['GET'])
def getNameGood():
	return json.dumps(database.get_memes_by_name_good(str(request.args.get('name'))))



@app.route('/sendNewMeme', methods=['GET'])
def sendNewMeme():
	database.insert_data(str(request.args.get('name')), str(request.args.get('description')))
	return "hi"



@app.route('/getAllMemes', methods=['GET'])
def getAll():
	return json.dumps(database.get_memes())
app.run()
