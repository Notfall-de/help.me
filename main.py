import os

from flask import Flask, Response, redirect, request
import json

app = Flask(__name__)


@app.route('/<target>', methods=["GET"])
def site(target):
    return Response(open("static/site.html", encoding="UTF-8").read(), status=200, mimetype="text/html; charset=utf-8")


@app.errorhandler(404)
def page_not_found(_):
    return redirect("/start")


@app.route('/api/site/<target>', methods=["GET"])
def get_site(target):
    lang = request.args.get("lang")
    if not lang:
        lang = "de-DE"
    if lang not in os.listdir("./sites") and lang:
        return Response(json.dumps({"code": 404, "msg": "this language does not exist"}), status=410, mimetype="application/json")
    else:
        if f"{target}.json" not in os.listdir(f"./sites/{lang}/"):
            return Response(json.dumps({"code": 404, "msg": "this site does not exist"}), status=410, mimetype="application/json")
    return Response(open(f"./sites/{lang}/{target}.json", encoding="UTF-8").read(), status=200, mimetype="application/json")


if __name__ == "__main__":
    app.run(host='localhost', port=2000)
