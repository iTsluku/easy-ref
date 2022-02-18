from flask import Flask, render_template

app = Flask(__name__)

containers = [
    {"title": "Ref Stack A", "description": "bla bla bla"},
    {"title": "Ref Stack B", "description": "bla bla bla bla bla bla"},
    {"title": "Ref Stack C", "description": "bla bla bla bla bla"},
    {"title": "Ref Stack D", "description": "bla bla bla"},
    {"title": "Ref Stack E", "description": "bla bla bla"},
    {"title": "Ref Stack F", "description": "bla bla bla"},
    {"title": "Ref Stack G", "description": "bla bla bla"},
    {"title": "Ref Stack H", "description": "bla bla bla bla bla bla bla"},
    {
        "title": "Ref Stack I",
        "description": "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    },
    {"title": "Ref Stack J", "description": "bla bla bla"},
    {"title": "Ref Stack K", "description": "bla bla bla"},
    {"title": "Ref Stack L", "description": "bla bla bla bla bla"},
    {"title": "Ref Stack M", "description": "bla bla bla"},
]


@app.route("/")
def home():
    return render_template("home.html", containers=containers)


@app.errorhandler(404)
def page_not_found():
    return render_template("page_not_found.html")


if __name__ == "__main__":
    app.run()
