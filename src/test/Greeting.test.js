import { render, screen } from "@testing-library/react";
import Greeting from "./../components/Greeting";
import userEvent from '@testing-library/user-event'

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello world");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if button is not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if button is  clicked", () => {
    render(<Greeting />);

    const buttonElement=screen.getByRole('button')
    userEvent.click(buttonElement)

    const outputElement = screen.getByText("changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test(" should not renders good to see you if button is  clicked", () => {
    render(<Greeting />);

    const buttonElement=screen.getByRole('button')
    userEvent.click(buttonElement)

    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });
});
