import { useEffect, useReducer } from "react";
import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import { optionsReducer } from "../../reducers/optionsReducer";
import { State } from "../../reducers/optionsInitialState";
import checkWinner from "./checkWinner";

vi.mock("../../reducers/optionsInitialState", () => {
  return {
    State: {
      playerHand: 0,
      computerHand: 1,
      runTimer: false,
      score: {
        player: 4,
        computer: 2,
      },
      results: {
        winner: "Any Value",
        message: "Any Value",
      },
    },
  };
});

type TestProps = {
  computer: string;
  hand: string;
};

const TestComponent = ({ hand, computer }: TestProps) => {
  const [state, dispatch] = useReducer(optionsReducer, State);

  useEffect(() => {
    checkWinner(dispatch, hand, computer);
  }, [dispatch, hand, computer]);

  return (
    <>
      <p>{state.score.player}</p>
      <p>{state.score.computer}</p>
      <p>{state.results.winner}</p>
    </>
  );
};

describe("Check Winner Function", () => {
  it("Should display the player win result", () => {
    render(<TestComponent hand="rock" computer="scissors" />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Player Wins!")).toBeInTheDocument();
  });
});
