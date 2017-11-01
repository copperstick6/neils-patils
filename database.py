from dotenv import load_dotenv, find_dotenv
import os
load_dotenv(find_dotenv())
import pymysql
import json

def get_memes():
	connection = pymysql.connect(host=str(os.environ.get("HOST")),
	                             user=str(os.environ.get("USER")),
	                             password=str(os.environ.get("PASSWORD")),
								 port=int(os.environ.get("PORT")),
								 database=str(os.environ.get('DATABASE')),
	                             charset='utf8mb4',
	                             cursorclass=pymysql.cursors.DictCursor)
	with connection.cursor() as cursor:
		cursor.execute("SELECT * FROM memes;")
		connection.commit()
		result = cursor.fetchall()
		return result

def get_memes_by_name(name):
	connection = pymysql.connect(host=str(os.environ.get("HOST")),
	                             user=str(os.environ.get("USER")),
	                             password=str(os.environ.get("PASSWORD")),
								 port=int(os.environ.get("PORT")),
								 database=str(os.environ.get('DATABASE')),
	                             charset='utf8mb4',
	                             cursorclass=pymysql.cursors.DictCursor)
	with connection.cursor() as cursor:
		cursor.execute("SELECT * FROM memes WHERE Name = '%s'" % name);
		connection.commit()
		result = cursor.fetchall()
		return result

def get_memes_by_name_good(name):
	connection = pymysql.connect(host=str(os.environ.get("HOST")),
	                             user=str(os.environ.get("USER")),
	                             password=str(os.environ.get("PASSWORD")),
								 port=int(os.environ.get("PORT")),
								 database=str(os.environ.get('DATABASE')),
	                             charset='utf8mb4',
	                             cursorclass=pymysql.cursors.DictCursor)
	with connection.cursor() as cursor:
		cursor.execute("SELECT * FROM memes WHERE Name = %s", name);
		connection.commit()
		result = cursor.fetchall()
		return result

def insert_data(name, details):
		connection = pymysql.connect(host=str(os.environ.get("HOST")),
		                             user=str(os.environ.get("USER")),
		                             password=str(os.environ.get("PASSWORD")),
									 port=int(os.environ.get("PORT")),
									 database=str(os.environ.get('DATABASE')),
		                             charset='utf8mb4',
		                             cursorclass=pymysql.cursors.DictCursor)
		with connection.cursor() as cursor:
			cursor.execute("INSERT INTO memes (Name, Description) VALUES (%s, %s)",(name, details));
			connection.commit()
