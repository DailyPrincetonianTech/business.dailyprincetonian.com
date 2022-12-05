from flask import Blueprint, render_template
from app.models.audience import Audience
from app.services.advertisement import get_all_advertisements_by_audience_id

from app.models.audience import audience_schema

blueprint = Blueprint("home", __name__)


# GET /
@blueprint.route("/")
def index():
    advertisements = []
    for audience_id in range(Audience.query.count()):
        advertisements.append(get_all_advertisements_by_audience_id(audience_id))

    audiences = []
    for audience in Audience.query.all():
        audiences.append(audience_schema.dump(audience))
        

    print(advertisements)

    return render_template("home/index.html", audiences = audiences, advertisements = advertisements)