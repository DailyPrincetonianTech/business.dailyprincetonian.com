from flask import Flask
from app.database import db

from app.models.audience import Audience

# View imports.
from app.views import home 
from app.views import upload


def init_app(config_object):
    '''Initializes and returns a newly-created app instance.'''

    app = Flask(__name__, static_url_path = "", static_folder = "static")
    app.config.from_object(config_object)

    with app.app_context():
        # Initialize database.
        db.init_app(app)
        db.create_all()
        
        # Seeded data.
        _seed_data()
        
        # Register blueprints.
        app.register_blueprint(home.views.blueprint)
        app.register_blueprint(upload.views.blueprint)
        
    return app

def _seed_data():
    # Seeded audience data.
    audiences = []
    audiences.append(Audience(id = 0, name = "Princeton Student or Organization"))
    audiences.append(Audience(id = 1, name = "Local Advertiser (Mercer County)"))
    audiences.append(Audience(id = 2, name = "National Advertiser"))
    audiences.append(Audience(id = 3, name = "Recruiter"))
    
    # Check if audience data already exists.
    for audience in audiences:
        if not db.session.query(Audience).filter_by(name = audience.name).first():
            db.session.add(audience)
    
    # Commit to database.
    db.session.commit()