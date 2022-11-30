class Config:
    DEBUG = True
    DEVELOPMENT = True


'''Production configurations.'''
class ProductionConfig(Config):
    DEBUG = False
    DEVELOPMENT = False
    
    # SQLAlchemy configurations.
    SQLALCHEMY_DATABASE_URI = "<PRODUCTION_SQL_DATABASE_URI>"   # IMPORTANT: CHANGE THIS TO YOUR PRODUCTION DATABASE URI.
    
    # Upload authoriztion token.
    UPLOAD_AUTH_TOKEN = "<PRODUCTION_UPLOAD_AUTH_TOKEN>"        # IMPORTANT: CHANGE THIS TO YOUR PRODUCTION UPLOAD AUTH TOKEN.


'''Development configurations.'''
class DevelopmentConfig(Config):
    print("THIS APP IS IN DEBUG MODE. YOU SHOULD NOT SEE THIS IN PRODUCTION.")
    
    DEBUG = True
    DEVELOPMENT = True
    UPLOAD_AUTH_TOKEN = "<DEVELOPMENT_UPLOAD_AUTH_TOKEN>"
    SQLALCHEMY_DATABASE_URI = "<DEVELOPMENT_SQL_DATABASE_URI>"
    