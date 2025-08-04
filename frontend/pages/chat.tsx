import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Button } from '../components/ui/button'

type FormData = {
  message: string
}

type ChatMessage = {
  sender: 'user' | 'bot'
  text: string
}

export default function Chat() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const onSubmit = async (data: FormData) => {
    const userMsg: ChatMessage = { sender: 'user', text: data.message }
    setMessages(prev => [...prev, userMsg])
    const res = await axios.post('http://localhost:8000/chat', data)
    const botMsg: ChatMessage = { sender: 'bot', text: res.data.response }
    setMessages(prev => [...prev, botMsg])
    reset()
  }

  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl font-bold">Chat</h1>
      <div className="space-y-2">
        {messages.map((m, idx) => (
          <p key={idx} className={m.sender === 'user' ? 'text-right' : ''}>
            <span className="font-semibold">{m.sender === 'user' ? 'You' : 'Tutor'}:</span> {m.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2">
        <input {...register('message')} className="border p-2 flex-1" placeholder="Say something..." />
        <Button type="submit">Send</Button>
      </form>
    </main>
  )
}
