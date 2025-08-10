# SEA Learning Platform Prototype

This repository contains a minimal prototype for a multilingual, AI-assisted learning platform targeting students and educators in Southeast Asia.

## Features

- **Translation Demo** – Next.js frontend allows students to translate text. Backend uses a placeholder reverse-string translation.
- **Quiz Grading** – Backend endpoint auto-grades a simple quiz.
- **Assignment Dashboard** – Backend returns mock assignment scores for teachers.

## Tech Stack

- Frontend: Next.js, React Hook Form, Tailwind CSS, shadcn/ui (Radix components), Vitest
- Backend: Django + Ninja API

## Development

### Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Tests
```bash
# backend
cd backend
python manage.py test

# frontend
cd frontend
npm test
```
