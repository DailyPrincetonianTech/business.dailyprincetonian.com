from flask_restful import Resource
from datetime import datetime

# Import scema and manager
# from app.models.menu.schema import DailyMenuSchema
# from app.models.menu.manager import MenuManager

from app.http.api import api


class Example(Resource):
    def __init__(self):
        # init manager
        # self.menu_manager = MenuManager()
        pass

    def get(self):
        # return JSON
        return {
            'message': 'Hello, World!',
        }


api.add_resource(Example, "/api/example")