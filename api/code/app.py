from flask import Flask, g, request
from flask_babel import Babel
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os
from flask import jsonify

# Modules
from modules.store import store_app
from modules.auth import auth_app

# exceptions
from errors.custom_error import CustomException

app = Flask(__name__)

# Add modules
app.register_blueprint(store_app, url_prefix="/api/store")
app.register_blueprint(auth_app, url_prefix="/api/user")

# CORS
CORS(app)

# babel
babel = Babel(app)

@app.route("/test")
def ping():
    return {"message": "welcome"}, 200


@app.route("/testmessage")
def pingenv():
    message = os.environ.get("TEST_MESSAGE")
    return {"message": message}, 200


@babel.localeselector
def get_locale():
    user = getattr(g, 'user', None)
    if user is not None:
        return user.locale
    return request.accept_languages.best_match(app.config['SUPPORTED_LANGUAGES'].keys())


@babel.timezoneselector
def get_timezone():
    user = getattr(g, 'user', None)
    if user is not None:
        return user.timezone


# add custom exceptions
@app.errorhandler(CustomException)
def handle_custom_error(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


# Config
jwt = JWTManager(app)
app.config.from_object("config")

if __name__ == '__main__':
    from db import db
    db.init_app(app)

    app.run(debug=True)  # important to mention debug=True
