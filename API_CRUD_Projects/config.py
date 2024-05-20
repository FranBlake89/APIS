from os import environ, path
from dotenv import load_dotenv

# basedir = path.abspath(path.dirname(__file__))
# load_dotenv(path.join(basedir, '.env'))

class Config:
    TESTING = True
    DEBUG = True
    # FLASK_ENV = 'development'
    # SECRET_KEY = environ.get('SECRET_KEY')

    # Database
    # SQL_DB_URI = environ.get('SQL_DB_URI')
    # MONGODB_URI = environ.get('MONGODB_URI')

