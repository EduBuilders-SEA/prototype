import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Button } from '../components/ui/button'

type FormData = {
  answer1: string
  answer2: string
  answer3: string
}

export default function Quiz() {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState<{ score: number; feedback: string } | null>(null)

  const onSubmit = async (data: FormData) => {
    const answers = [data.answer1, data.answer2, data.answer3]
    const res = await axios.post('http://localhost:8000/grade_quiz', { answers })
    setResult(res.data)
  }

  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl font-bold">Quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input {...register('answer1')} className="border p-2 w-full" placeholder="Answer 1" />
        <input {...register('answer2')} className="border p-2 w-full" placeholder="Answer 2" />
        <input {...register('answer3')} className="border p-2 w-full" placeholder="Answer 3" />
        <Button type="submit">Submit</Button>
      </form>
      {result && (
        <div className="mt-4">
          <p>Score: {result.score}</p>
          <p>Feedback: {result.feedback}</p>
        </div>
      )}
    </main>
  )
}
