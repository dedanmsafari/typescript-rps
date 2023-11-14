import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import OptionsProvider from "./options.context";
import { useHand } from "./options.context";

vi.mock("../reducers/optionsInitialState.ts", () => {
  return {
    State: {
      playerHand: 2,
      computerHand: 1,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      results: {
        winner: "Player 1",
        message: "",
      },
    },
  };
});

describe("Options Context", () => {
  const TestComponent = () => {
    const { state } = useHand();
    return (
      <>
        <p>PlayerHand: {state.playerHand}</p>
        <p>ComputerHand: {state.computerHand}</p>
        <p>Winner: {state.results.winner}</p>
      </>
    );
  };

  it("should render component with the intial context values", () => {
    render(
      <OptionsProvider>
        <TestComponent />
      </OptionsProvider>
    );

    expect(screen.getByText(/PlayerHand: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/ComputerHand: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Winner: Player 1/i)).toBeInTheDocument();
  });
});
