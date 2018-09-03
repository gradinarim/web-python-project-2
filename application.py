import os
import configparser

from flask import Flask
from flask_socketio import SocketIO, emit

config = configparser.ConfigParser()
config.read('config.cfg')
SECRET_KEY = config['secret_key']['SECRET_KEY']

app = Flask(__name__)
app.config["SECRET_KEY"] = SECRET_KEY
socketio = SocketIO(app)


@app.route("/")
def index():
    return "Project 2: TODO"
