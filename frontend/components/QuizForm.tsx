'use client';
import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from './ui/button';

type FormValues = { q1: string; q2: string };

export function QuizForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [score, setScore] = React.useState<number | null>(null);
  const onSubmit = async (data: FormValues) => {
    const res = await fetch('http://localhost:8000/grade-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: { q1: data.q1, q2: data.q2 }, correct_answers: { q1: 'a', q2: 'b' } })
    });
    const json = await res.json();
    setScore(json.score);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <input {...register('q1')} className="border p-2" placeholder="Answer 1" />
      <input {...register('q2')} className="border p-2" placeholder="Answer 2" />
      <Button type="submit">Submit</Button>
      {score !== null && <p>Score: {score}</p>}
    </form>
  );
}
