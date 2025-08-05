import NavBar from "@/components/NavBar.jsx";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to SEAspire</h1>
        <p className="text-lg">
          SEAspire is an AI-powered learning platform for personalized education in Southeast Asia.
        </p>
      </main>
    </div>
  );
}
