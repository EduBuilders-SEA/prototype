import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '../components/ui/button';

interface FormValues {
  answer1: string;
  answer2: string;
}

export default function QuizPage() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [result, setResult] = useState<{ score: number; feedback: string[] } | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const res = await axios.post('http://localhost:8000/grade_quiz', {
      answers: [data.answer1, data.answer2],
    });
    setResult(res.data);
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input className="border p-2 w-full" placeholder="Answer 1" {...register('answer1')} />
        <input className="border p-2 w-full" placeholder="Answer 2" {...register('answer2')} />
        <Button type="submit">Submit</Button>
      </form>
      {result && (
        <div>
          <p>Score: {result.score}</p>
          <ul>
            {result.feedback.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
