from flask import Flask, render_template

app = Flask(__name__, template_folder="templates")
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
	return render_template(
		"index.html",
		active_page="home",
		page_name="index"
	)

@app.route("/contact")
def contact():
	return render_template(
		"contact.html",
		active_page="contact",
		page_name="contact"
	)

@app.route("/about")
def about():
	return render_template(
		"about.html",
		active_page="about",
		page_name="about"
	)
if __name__ == "__main__":
	app.run(debug=True)
