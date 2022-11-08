'''
Serves as an interface between the application server and
the application code.
'''

from app import init_app
from config import Config

# Initialize and run a new app instance. 
app = init_app(Config)
if __name__ == "__main__":
    app.run()