import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '../components/ui/button';

interface FormValues {
  text: string;
  language: string;
}

export default function TranslatePage() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [result, setResult] = useState('');

  const onSubmit = async (data: FormValues) => {
    const res = await axios.post('http://localhost:8000/translate', data);
    setResult(res.data.translated_text);
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Translate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Text"
          {...register('text')}
        />
        <input
          className="border p-2 w-full"
          placeholder="Language"
          {...register('language')}
        />
        <Button type="submit">Translate</Button>
      </form>
      {result && <p className="mt-4">Translation: {result}</p>}
    </main>
  );
}
