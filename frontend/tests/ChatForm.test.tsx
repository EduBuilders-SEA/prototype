import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { ChatForm } from '../components/ChatForm';

describe('ChatForm', () => {
  it('renders input box', () => {
    render(<ChatForm />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
