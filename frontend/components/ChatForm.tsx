'use client';
import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from './ui/button';

type FormValues = { message: string };

export function ChatForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [response, setResponse] = React.useState('');
  const onSubmit = async (data: FormValues) => {
    const res = await fetch('http://localhost:8000/chat-tutor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: data.message, user_profile: { country: 'Spain' } })
    });
    const json = await res.json();
    setResponse(json.response);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <input {...register('message')} className="border p-2" />
      <Button type="submit">Send</Button>
      {response && <p>{response}</p>}
    </form>
  );
}
