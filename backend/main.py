from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Enable CORS for all origins for simplicity
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


class QuizRequest(BaseModel):
    answers: List[str]


class ChatRequest(BaseModel):
    message: str


@app.post("/translate")
def translate(req: TranslateRequest):
    """Return a hardcoded translation"""
    return {"translated_text": f"{req.text} in {req.language}"}


@app.post("/grade_quiz")
def grade_quiz(req: QuizRequest):
    """Return a hardcoded quiz grade"""
    return {"score": 2, "feedback": ["Great job", "Review question 2"]}


@app.post("/chat")
def chat(req: ChatRequest):
    """Simulate AI tutor response"""
    return {"response": f"You said: {req.message}. Here's a helpful reply."}
