from flask import Flask, render_template, jsonify
from flask import request
from static.py.input import get_input, update_input

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", containers=get_input())


@app.errorhandler(404)
def page_not_found(e):
    return render_template("page_not_found.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/customization", methods=["GET", "POST"])
def customization():
    if request.method == "GET":
        return render_template("customization.html", containers=get_input())
    elif request.method == "POST":
        content_type = request.headers.get("Content-Type")
        if content_type == "application/json":
            content = request.json
            update_input(content)
        return jsonify({})


if __name__ == "__main__":
    app.run()
