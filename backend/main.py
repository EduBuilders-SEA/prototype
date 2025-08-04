from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TranslateRequest(BaseModel):
    text: str
    language: str


@app.post("/translate")
def translate(req: TranslateRequest):
    translations = {
        "es": "Hola Mundo",
        "fr": "Bonjour le monde",
        "de": "Hallo Welt",
    }
    translated_text = translations.get(req.language, "Translation not available")
    return {"translated_text": translated_text}


class QuizRequest(BaseModel):
    answers: List[str]


@app.post("/grade_quiz")
def grade_quiz(req: QuizRequest):
    return {"score": 85, "feedback": "Great job!"}


class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
def chat(req: ChatRequest):
    responses = {
        "hello": "Hello! How can I help you today?",
        "how are you?": "I'm just code, but I'm doing great!",
    }
    response = responses.get(req.message.lower(), "Let's learn something new!")
    return {"response": response}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
