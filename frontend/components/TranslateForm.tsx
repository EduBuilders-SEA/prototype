'use client';
import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from './ui/button';

type FormValues = { text: string; language: string };

export function TranslateForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [result, setResult] = React.useState('');
  const onSubmit = async (data: FormValues) => {
    const res = await fetch('http://localhost:8000/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    setResult(json.translated_text);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <select {...register('language')} className="border p-2">
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <textarea {...register('text')} className="border p-2" />
      <Button type="submit">Translate</Button>
      {result && <p>{result}</p>}
    </form>
  );
}
