import NavBar from "@/components/NavBar.jsx";
import TranslateForm from "@/components/TranslateForm.jsx";

export default function TranslatePage() {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Translation Demo</h1>
        <TranslateForm />
      </main>
    </div>
  );
}
