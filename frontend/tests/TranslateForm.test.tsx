import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { TranslateForm } from '../components/TranslateForm';

describe('TranslateForm', () => {
  it('renders language dropdown', () => {
    render(<TranslateForm />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
