import os
from pathlib import Path
from google import genai
from dotenv import load_dotenv

# Find the project directory
BASE_DIR = Path(__file__).resolve().parent

# Load environment variables
load_dotenv(BASE_DIR / ".env")

# Get Gemini API key
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("Gemini API key not found. Check your .env file.")

# Initialize Gemini client
client = genai.Client(api_key=api_key)


def ask_question(question):

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=question
    )

    return response.text