from flask import Flask, render_template

app = Flask(__name__)

containers = [
    {
        "title": "Media",
        "links": [
            {"title": "YouTube", "link": "https://www.youtube.com/"},
            {"title": "Twitch", "link": "https://www.twitch.tv/"},
            {"title": "Twitter", "link": "https://twitter.com/home"},
        ],
    },
    {
        "title": "E-Mail",
        "links": [
            {"title": "GMail", "link": "https://mail.google.com/"},
            {
                "title": "Outlook",
                "link": "https://email.uni-passau.de/",
            },
        ],
    },
    {
        "title": "Thesis",
        "links": [
            {"title": "NDB", "link": "https://www.deutsche-biographie.de/"},
            {"title": "NDB API", "link": "http://data.deutsche-biographie.de/about/"},
            {
                "title": "Wikidata",
                "link": "https://www.wikidata.org/wiki/Wikidata:Main_Page",
            },
        ],
    },
    {
        "title": "Python",
        "links": [
            {"title": "Documentation", "link": "https://docs.python.org/3/"},
            {"title": "Regex", "link": "https://docs.python.org/3/library/re.html"},
            {
                "title": "Mock",
                "link": "https://docs.python.org/3/library/unittest.mock.html",
            },
        ],
    },
    {
        "title": "Temp link dump",
        "links": [
            {"title": "R", "link": "https://packages.othr.de/cran/"},
            {"title": "i3wm", "link": "https://i3wm.org/"},
            {
                "title": "read blog post",
                "link": "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/",
            },
        ],
    },
]


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", containers=containers)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("page_not_found.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/customization")
def customization():
    return render_template("customization.html", containers=containers)


if __name__ == "__main__":
    app.run()
