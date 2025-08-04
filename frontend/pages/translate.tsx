import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Button } from '../components/ui/button'

type FormData = {
  text: string
  language: string
}

export default function Translate() {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState('')

  const onSubmit = async (data: FormData) => {
    const res = await axios.post('http://localhost:8000/translate', data)
    setResult(res.data.translated_text)
  }

  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl font-bold">Translate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <textarea {...register('text')} className="border p-2 w-full" placeholder="Enter text" />
        <input {...register('language')} className="border p-2 w-full" placeholder="Language code (e.g., es)" />
        <Button type="submit">Translate</Button>
      </form>
      {result && <p className="mt-4">Translation: {result}</p>}
    </main>
  )
}
