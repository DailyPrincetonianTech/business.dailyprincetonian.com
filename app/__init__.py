from flask import Flask
from app.database import DynamoDB as db
from config import Config

# View imports.
from app.views import home 


def init_app(config_object):
    '''Initializes and returns a newly-created app instance.'''

    app = Flask(__name__, static_url_path = "", static_folder = "static")
    app.config.from_object(Config)

    with app.app_context():
        # Initialize database.
        db.initialize(**app.config)
        
        # Register blueprints.
        app.register_blueprint(home.views.blueprint)        
        
        return app