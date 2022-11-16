from flask import Blueprint, render_template
from app.database import db


blueprint = Blueprint("home", __name__)

# GET /
@blueprint.route("/")
def index():

    return render_template("home/index.html")