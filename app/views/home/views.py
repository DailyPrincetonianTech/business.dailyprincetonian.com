from flask import Blueprint, render_template
from app.database import DynamoDB as db


blueprint = Blueprint("home", __name__)

# GET /
@blueprint.route("/")
def index():
    # Get advertisement data to pass to template.
    advertisements = db.resource().Table("advertisements").scan()["Items"]
    '''
    Which is a list of objects in the shape below:
    
	id			    INT (PK)
	title			STRING
	options			OBJ[]
		{
		"label":	STRING
		"price":	DOUBLE
		}
  
	remarks		    STRING[]
    '''
    
    return render_template("home/index.html", advertisements = advertisements)


# from decimal import Decimal
# import json
# # Temporary population of database.
# @blueprint.route("/populate")
# def test_populate():
#     advertisement = {
#             "id": 0,
#             "title": "Test Advertisement",
#             "options": [
#                 {
#                     "label": "Test Option 1",
#                     "price": 1.00
#                 },
#                 {
#                     "label": "Test Option 2",
#                     "price": 2.00
#                 }
#             ],
#             "remarks": [
#                 "Test Remark 1",
#                 "Test Remark 2"
#             ]
#         }
    
#     advertisement = json.loads(json.dumps(advertisement), parse_float = Decimal)
#     return db.resource().Table("advertisements").put_item(Item = advertisement)