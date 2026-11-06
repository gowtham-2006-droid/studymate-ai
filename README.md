# 🎓 StudyMate AI

**Your Personal AI-Powered Study Assistant**

StudyMate AI is an AI-powered study assistant designed to help students learn smarter and understand concepts through interactive conversations. It uses the Google Gemini API to generate intelligent responses to student questions.

## 🚀 Features

- **AI Assistant:** Ask academic questions and receive AI-generated explanations.
- **Note Summarizer:** Planned feature for summarizing study notes.
- **Question Generator:** Planned feature for generating questions from study materials.
- **Quiz Creator:** Planned feature for creating interactive quizzes.
- **Code Explainer:** Planned feature for understanding programming concepts and code.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend development |
| Flask | Web application framework |
| Google Gemini API | LLM integration |
| HTML | Web page structure |
| CSS | User interface styling |
| JavaScript | Frontend interactivity |
| REST API | Frontend-backend communication |

## 📂 Project Structure

```text
study_assistant/
│
├── app.py
├── ai_engine.py
├── requirements.txt
├── .env
│
├── templates/
│   ├── index.html
│   └── chat.html
│
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd study_assistant
```

### 3. Create a virtual environment

```bash
py -m venv venv
```

### 4. Activate the virtual environment

Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure the Gemini API key

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/).

**Important:** Never upload your `.env` file or expose your API key on GitHub.

### 7. Run the application

```bash
py app.py
```

Open your browser and visit:

```text
http://127.0.0.1:5000
```

## 🧠 Project Category

**LLM API Integration | Generative AI | AI Application Development**

StudyMate AI integrates a pretrained Large Language Model (Google Gemini) through its API. The application does not train its own language model.

## 🎯 Project Objective

The main objective of StudyMate AI is to explore how Large Language Models can be integrated into practical applications to improve the student learning experience.

Through this project, I am gaining practical experience in:

- LLM API integration
- Python backend development
- Flask application development
- REST API communication
- Frontend and backend integration
- Building Generative AI applications

## 🔮 Future Improvements

- Implement all study assistant modules.
- Add PDF-based question answering using RAG.
- Maintain conversation history.
- Add user authentication.
- Improve response customization.

## 👨‍💻 Developer

**Gowtham**

B.Tech – Computer Science and Engineering (AI & ML)

---

⭐ If you find this project interesting, consider giving the repository a star!