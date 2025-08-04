import Link from 'next/link'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-2xl font-bold">SEAspire</h1>
      <div className="space-x-2">
        <Link href="/translate"><Button>Translate</Button></Link>
        <Link href="/quiz"><Button>Quiz</Button></Link>
        <Link href="/chat"><Button>Chat</Button></Link>
      </div>
    </main>
  )
}
