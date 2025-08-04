import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '../components/ui/button';

interface FormValues {
  message: string;
}

export default function ChatPage() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);

  const onSubmit = async (data: FormValues) => {
    setMessages(prev => [...prev, { from: 'user', text: data.message }]);
    const res = await axios.post('http://localhost:8000/chat', data);
    setMessages(prev => [...prev, { from: 'bot', text: res.data.response }]);
    reset();
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Chat</h1>
      <div className="border p-2 h-64 overflow-y-auto">
        {messages.map((m, i) => (
          <p key={i} className={m.from === 'user' ? 'text-right' : ''}>
            <span className="font-semibold">{m.from === 'user' ? 'You' : 'Tutor'}:</span> {m.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2">
        <input className="border p-2 flex-grow" placeholder="Message" {...register('message')} />
        <Button type="submit">Send</Button>
      </form>
    </main>
  );
}
