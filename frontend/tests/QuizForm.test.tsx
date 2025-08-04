import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { QuizForm } from '../components/QuizForm';

describe('QuizForm', () => {
  it('renders two inputs', () => {
    render(<QuizForm />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(2);
  });
});
