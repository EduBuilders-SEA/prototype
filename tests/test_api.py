import sys, os; sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_translate():
    res = client.post('/translate', json={'text': 'hello', 'language': 'es'})
    assert res.status_code == 200
    assert res.json()['translated_text'] == 'es: hello'

def test_chat_tutor():
    res = client.post('/chat-tutor', json={'message': 'Hello', 'user_profile': {'country': 'Spain'}})
    data = res.json()
    assert data['response'] == 'Hi Spain!'
    assert data['updated_profile']['last_message_length'] == '5'

def test_grade_quiz():
    res = client.post('/grade-quiz', json={'answers': {'q1': 'a', 'q2': 'b'}, 'correct_answers': {'q1': 'a', 'q2': 'c'}})
    data = res.json()
    assert data['score'] == 50
    assert 'q2' in data['feedback']

def test_get_assignments():
    res = client.get('/assignments')
    assert res.status_code == 200
    assert isinstance(res.json(), list)
