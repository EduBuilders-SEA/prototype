import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatWidget from "./ChatWidget.jsx";

test("renders chat and shows AI response", async () => {
  render(<ChatWidget />);
  fireEvent.change(screen.getByPlaceholderText("Ask something..."), {
    target: { value: "Hello" },
  });
  fireEvent.click(screen.getByText("Send"));
  expect(
    await screen.findByText(
      "Newton's first law states that an object will remain at rest or in uniform motion unless acted upon by a force."
    )
  ).toBeInTheDocument();
});
