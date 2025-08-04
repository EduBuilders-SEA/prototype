import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuizForm from "./QuizForm.jsx";

test("displays score and feedback after submission", async () => {
  render(<QuizForm />);
  fireEvent.change(screen.getByPlaceholderText("Your answer"), {
    target: { value: "42" },
  });
  fireEvent.click(screen.getByText("Submit"));
  expect(await screen.findByText("Score: 85")).toBeInTheDocument();
  expect(
    await screen.findByText(
      "Great job! Review question 3 for better understanding."
    )
  ).toBeInTheDocument();
});
