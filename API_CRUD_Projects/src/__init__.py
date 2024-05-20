# Initialize Flask App
from flask import Flask
from .routes import init_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")

    #Init DB

    #Register Routes
    init_routes(app)

    return app