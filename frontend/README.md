# SEAspire Frontend Prototype

This Next.js prototype showcases static demos for SEAspire's learning platform. All data is hardcoded to illustrate key features without a backend.

## Available Pages

- **Home** – entry point with navigation to the demos.
- **Translate** – form that returns predefined translations for Filipino, Vietnamese, and Indonesian.
- **Quiz** – submits an answer and displays a fixed score with feedback.
- **Chat** – simple chat widget cycling through scripted AI tutor responses.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Testing

Run unit tests for the core components:

```bash
npm test
```

Vitest with React Testing Library verifies the Translate, Quiz, and Chat components.
