import '../styles/globals.css'
import { TranslateForm } from '../components/TranslateForm'

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">Translator</h1>
      <TranslateForm />
    </main>
  )
}
