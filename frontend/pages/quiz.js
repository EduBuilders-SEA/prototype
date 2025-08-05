import NavBar from "@/components/NavBar.jsx";
import QuizForm from "@/components/QuizForm.jsx";

export default function QuizPage() {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Quiz Grading Demo</h1>
        <QuizForm />
      </main>
    </div>
  );
}
