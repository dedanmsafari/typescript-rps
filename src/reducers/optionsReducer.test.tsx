import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

const TestingComponent = () => {
  return (
    <>
      <p> playerhand: 1</p>
    </>
  );
};

describe("Options Reducer", () => {
  it("Should update the optionsReducer with the correct playerHand", () => {
    render(<TestingComponent />);

    expect(screen.getByText(/playerhand: 1/)).toBeInTheDocument();
  });
});
