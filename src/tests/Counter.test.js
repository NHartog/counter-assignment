import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

// Render the Counter component before each test
beforeEach(() => {
    render(<Counter />)
});

test("renders counter message", () => {
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
    expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
    // Click the decrement button and verify the count is decremented
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("count")).toHaveTextContent("-1");
});
