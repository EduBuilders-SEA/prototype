'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({ text: z.string().min(1) });

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const [translated, setTranslated] = React.useState('');

  const onSubmit = async (data: any) => {
    const res = await fetch('http://localhost:8000/api/core/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: data.text })
    });
    const json = await res.json();
    setTranslated(json.translated);
  };

  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">Translation Demo</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input {...register('text')} className="border p-2" placeholder="Text" />
        {errors.text && <p className="text-red-500">Required</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Translate</button>
      </form>
      {translated && <p className="mt-4">{translated}</p>}
    </main>
  );
}
