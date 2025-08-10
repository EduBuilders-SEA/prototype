from django.test import TestCase, Client
import json


class ApiTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_translate_endpoint(self):
        resp = self.client.post(
            '/api/core/translate',
            data=json.dumps({"text": "abc"}),
            content_type='application/json'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json()['translated'], 'cba')

    def test_quiz_endpoint(self):
        resp = self.client.post(
            '/api/core/quiz',
            data=json.dumps({"answer": "42"}),
            content_type='application/json'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertTrue(resp.json()['correct'])
