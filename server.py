import sys
import database
from flask import Flask, jsonify, request, redirect, render_template
import requests
import json
import flask
app = Flask(__name__)


@app.route('/getMemeName', methods=['POST'])
def getName():
	return json.dumps(database.get_memes_by_name(str(request.form['name'])))

@app.route('/sendNewMeme', methods=['POST'])
def sendNewMeme():
	database.insert_data(str(request.form['name']), str(request.form['description']))

@app.route('/getAllMemes', methods=['GET'])
def getAll():
	return json.dumps(database.get_memes())
app.run()
