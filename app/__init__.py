from flask import Flask
from app.database import db

# View imports.
from app.views import home 


def init_app(config_object):
    '''Initializes and returns a newly-created app instance.'''

    app = Flask(__name__, static_url_path = "", static_folder = "static")
    app.config.from_object(config_object)

    with app.app_context():
        # Initialize database.
        db.init_app(app)
        db.create_all()
        
        # Register blueprints.
        app.register_blueprint(home.views.blueprint)        
        
        return app