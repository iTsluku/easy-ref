from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("page_not_found.html")


if __name__ == "__main__":
    app.run()
