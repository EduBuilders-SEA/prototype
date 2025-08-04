import { render, fireEvent, waitFor } from '@testing-library/react'
import { vi, test, expect } from 'vitest'
import { TranslateForm } from '../components/TranslateForm'

// Unit tests for issue #1
vi.spyOn(global, 'fetch').mockResolvedValue({ json: async () => ({ translated_text: 'Hola' }) } as any)

test('submits translation request', async () => {
  const { getByText, getByRole } = render(<TranslateForm />)
  const textarea = getByRole('textbox') as HTMLTextAreaElement
  fireEvent.change(textarea, { target: { value: 'Hello' } })
  fireEvent.click(getByText('Translate'))
  await waitFor(() => expect(fetch).toHaveBeenCalled())
})
