import os
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from datetime import datetime
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash
import sqlite3
from sqlite3 import Error
import string
import random
import json

app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/index", methods = ["GET"])
def oldIndex():
    return render_template("index.html")

@app.route("/", methods = ["GET", "POST"])
def index():
    if request.method == "POST":
        adList = []
        ad1 = {"id": 1, 
        "name": "Facebook Post",
        "category": "student",
        "categoryId": 1,
        "imgLink": "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-skyscraper.png",
        "subtypes": [{"name": "Day", "cost": "$90.00"}, {"name": "Week", "cost": "$81.00"}],
        "asterisks": ["* Graphic Design $65", "** Prices are per day"],
        "clickable": True}
        
        ad2 = {"id": 1, 
        "name": "Website Billboard",
        "category": "recruiter",
        "categoryId": 1,
        "imgLink": "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/email-header.png",
        "subtypes": [{"name": "Day", "cost": "$80.00"}, {"name": "Week", "cost": "$91.00"}],
        "asterisks": ["* Graphic Design $62", "** Prices are per week"],
        "clickable": False}
        adList.append(ad1)
        adList.append(ad2)
        return json.dumps(adList)
    else:
        return render_template('index-new.html')