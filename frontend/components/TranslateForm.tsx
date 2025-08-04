'use client'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'

interface FormValues {
  text: string
  language: string
}

export function TranslateForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { text: '', language: 'es' }
  })

  async function onSubmit(data: FormValues) {
    await fetch('http://localhost:8000/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <select className="border p-1" {...register('language')}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <textarea className="border w-full p-1" rows={3} {...register('text')} />
      <Button type="submit">Translate</Button>
    </form>
  )
}
