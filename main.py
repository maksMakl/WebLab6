from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def send_page():
    return render_template("index.html")

@app.route("/receive")
def receive_page():
    return render_template("receive_page.html")

@app.route("/submit", methods=["POST"])
def submit():
    content = request.form.get("content")
    position = request.form.get("position")

    with open("toast_queue.txt", "a") as f:
        f.write(f"{content};{position}\n")

    return "Data sent."

@app.route('/get_data')
def get_data():
    with open('toast_queue.txt', 'r') as f:
        data = f.read()
    
    with open('toast_queue.txt', 'w') as f:
        f.write("")
    
    return jsonify({'data': data})

if __name__ == "__main__":
    app.run(debug=True)