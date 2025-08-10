from ninja import Router, Schema
from django.http import HttpRequest

router = Router()

class TranslateIn(Schema):
    text: str

class TranslateOut(Schema):
    translated: str

@router.post("/translate", response=TranslateOut)
def translate(request: HttpRequest, payload: TranslateIn):
    # Placeholder translation logic
    return {"translated": payload.text[::-1]}

class QuizIn(Schema):
    answer: str

class QuizOut(Schema):
    correct: bool

@router.post("/quiz", response=QuizOut)
def grade_quiz(request: HttpRequest, payload: QuizIn):
    # Placeholder grading: correct if answer == '42'
    return {"correct": payload.answer.strip() == '42'}

class Assignment(Schema):
    name: str
    score: int

@router.get("/dashboard", response=list[Assignment])
def dashboard(request: HttpRequest):
    return [Assignment(name="Math Quiz", score=80), Assignment(name="Science Quiz", score=90)]
