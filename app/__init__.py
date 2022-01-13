from flask import Flask

app = Flask(__name__, static_url_path="", static_folder="../build")

app.config.from_object("app.config")
app.secret_key = app.config["SECRET_KEY"]

from app import http