from flask import Flask
from commonfiles.form import admin_bp

app = Flask(__name__)
app.secret_key = "secret key"

app.register_blueprint(admin_bp)
