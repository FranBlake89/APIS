from flask import Blueprint

main_bp = Blueprint("main", __name__)

@main_bp.route('/')
def home():
    return "Hola mundo"


def init_routes(app):
    app.register_blueprint(main_bp)