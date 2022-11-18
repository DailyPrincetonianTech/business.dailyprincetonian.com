class TestingConfiguration:
    TESTING = True
    DEBUG = True
    DEVELOPMENT = True
    
    # Use in-memory database for testing.
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"