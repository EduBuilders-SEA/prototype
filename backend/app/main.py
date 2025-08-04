from fastapi import FastAPI
from pydantic import BaseModel

# Issue #1: Hyper-Localized LLM Tutors (translation service)

class TranslationRequest(BaseModel):
    text: str
    language: str

class TranslationResponse(BaseModel):
    translated_text: str

app = FastAPI()

# A simple stub translation service
@app.post('/translate', response_model=TranslationResponse)
def translate(req: TranslationRequest) -> TranslationResponse:
    """Mock translation endpoint for issue #1."""
    translated = f"{req.text} ({req.language})"
    return TranslationResponse(translated_text=translated)
