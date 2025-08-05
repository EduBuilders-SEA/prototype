import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/Input.jsx";
import { Button } from "./ui/Button.jsx";

const hardcodedFeedback = {
  score: 85,
  feedback: "Great job! Review question 3 for better understanding.",
};

export default function QuizForm() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = () => {
    setResult(hardcodedFeedback);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("answer")} placeholder="Your answer" />
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          Submit
        </Button>
      </form>
      {result && (
        <div className="mt-4">
          <p>Score: {result.score}</p>
          <p>{result.feedback}</p>
        </div>
      )}
    </div>
  );
}
