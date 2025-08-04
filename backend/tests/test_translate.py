import sys
from pathlib import Path
from fastapi.testclient import TestClient

# Ensure the backend package is importable
sys.path.append(str(Path(__file__).resolve().parents[1]))
from app.main import app

# Tests for issue #1
client = TestClient(app)

def test_translate_returns_text():
    response = client.post('/translate', json={'text': 'Hello', 'language': 'es'})
    assert response.status_code == 200
    assert response.json()['translated_text'] == 'Hello (es)'
