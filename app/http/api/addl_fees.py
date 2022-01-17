from flask_restful import Resource
from app.http.api import api
from app.models.rates.manager import AdditionalFeesManager
from app.models.rates.schema import AdditionalFeesSchema

class Additional_fees(Resource):
    def __init__(self):
        self.addl_fees_manager = AdditionalFeesManager()

    def get(self):
        return AdditionalFeesSchema.dump(self.addl_fees_manager.get())

api.add_resource(Additional_fees, "/api/addl_fees")