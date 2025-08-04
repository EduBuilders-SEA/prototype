from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, List, Optional

# Issue references: #1, #2, #3, #4
# Simple in-memory stores for prototype

app = FastAPI()

class TranslateRequest(BaseModel):
    text: str
    language: str

class TranslateResponse(BaseModel):
    translated_text: str

translations_store: Dict[str, Dict[str, str]] = {}

@app.post("/translate", response_model=TranslateResponse)
def translate(req: TranslateRequest):
    translated = f"{req.language}: {req.text}"
    translations_store.setdefault(req.language, {})[req.text] = translated
    return {"translated_text": translated}

class ChatRequest(BaseModel):
    message: str
    user_profile: Dict[str, str]

class ChatResponse(BaseModel):
    response: str
    updated_profile: Dict[str, str]

@app.post("/chat-tutor", response_model=ChatResponse)
def chat_tutor(req: ChatRequest):
    profile = req.user_profile.copy()
    profile["last_message_length"] = str(len(req.message))
    response = f"Hi {profile.get('country', 'learner')}!"
    return {"response": response, "updated_profile": profile}

class GradeRequest(BaseModel):
    answers: Dict[str, str]
    correct_answers: Dict[str, str]

class GradeFeedback(BaseModel):
    score: int
    feedback: Dict[str, str]

@app.post("/grade-quiz", response_model=GradeFeedback)
def grade_quiz(req: GradeRequest):
    total = len(req.correct_answers)
    correct = 0
    feedback: Dict[str, str] = {}
    for q, correct_ans in req.correct_answers.items():
        ans = req.answers.get(q)
        if ans == correct_ans:
            correct += 1
        else:
            feedback[q] = f"Expected {correct_ans}"
    score = int((correct / total) * 100) if total else 0
    return {"score": score, "feedback": feedback}

class Assignment(BaseModel):
    student: str
    assignment: str
    status: str
    score: Optional[int] = None

assignments = [
    Assignment(student="Alice", assignment="Quiz 1", status="completed", score=95),
    Assignment(student="Bob", assignment="Quiz 1", status="pending")
]

@app.get("/assignments", response_model=List[Assignment])
def get_assignments():
    return assignments
