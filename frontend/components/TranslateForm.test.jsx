import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TranslateForm from "./TranslateForm.jsx";

test("renders TranslateForm and displays translated text", async () => {
  render(<TranslateForm />);
  fireEvent.change(screen.getByPlaceholderText("Enter text"), {
    target: { value: "Hello" },
  });
  fireEvent.click(screen.getByText("Translate"));
  expect(await screen.findByText("Salamat")).toBeInTheDocument();
});
