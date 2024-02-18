from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__, template_folder='..//Hackathon Project//html5up-phantom//templates', static_folder='..//Hackathon Project//html5up-phantom//static')

db = SQLAlchemy()

host = "192.168.131.1"
user = "sqluser"
pin = "password"
db_name = "animals"

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{user}:{pin}@{host}/{db_name}"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

class Animals(db.Model):
  __tablename__ = "pet"
  animals_id = db.Column(db.Integer, primary_key=True)
  animals_name = db.Column(db.String(15), nullable=False)
  animals_url = db.Column(db.String(245), nullable=False)
  animals_type = db.Column(db.String(3), nullable=False)
  animals_description = db.Column(db.String(112), nullable=False)

  animals_age = db.Column(db.Integer)
  animals_gender = db.Column(db.String(4), nullable=False)
  animals_photos_full = db.Column(db.String(76), nullable=False)



@app.route("/")
def initial_query():
  details = Animals.query.limit(100).all()
  return render_template("generic.html", details=details)

if __name__ == "__main__":
  app.run(debug=True)

