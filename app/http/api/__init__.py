from flask_restful import Api

from app import app

api = Api(app)

from app.http.api import addl_fees