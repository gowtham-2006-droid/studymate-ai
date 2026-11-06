from flask import Flask, render_template, request, jsonify
from ai_engine import ask_question

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/chat')
def chat():
    return render_template('chat.html')


@app.route('/ask', methods=['POST'])
def ask():

    data = request.get_json()
    question = data.get('question', '').strip()

    if not question:
        return jsonify({"error": "Please provide a question."}), 400

    try:
        answer = ask_question(question)

        return jsonify({
            "answer": answer
        })

    except Exception as e:
        print("Gemini API Error:", str(e))

        return jsonify({
            "error": "Something went wrong. Please try again."
        }), 500


if __name__ == '__main__':
    app.run(debug=True)