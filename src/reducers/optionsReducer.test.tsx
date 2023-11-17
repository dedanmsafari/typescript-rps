import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { optionsReducer } from "./optionsReducer";
import { useEffect, useReducer } from "react";
import { State } from "./optionsInitialState";
import { GameActions } from "../models/Options";
import {
  ComputerOption,
  ComputerWinsOption,
  DrawOption,
  ErrorOption,
  PlayerWinsOption,
  ScissorsOption,
} from "../actions/OptionActions";

vi.mock("./optionsInitialState", () => {
  return {
    State: {
      playerHand: 5,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      results: {
        winner: "",
        message: "",
      },
    },
  };
});

type Testing = {
  myOptions: GameActions;
};

const TestingComponent = ({ myOptions }: Testing) => {
  const [state, dispatch] = useReducer(optionsReducer, State);

  useEffect(() => {
    dispatch(myOptions);
  }, [myOptions]);

  return (
    <>
      <p>{state.results.winner}</p>
      <p>{state.results.message}</p>
      <p> playerhand: {state.playerHand}</p>
      <p> computerhand: {state.computerHand}</p>
    </>
  );
};

describe("Options Reducer", () => {
  it("Should update the optionsReducer with the correct playerHand", () => {
    render(<TestingComponent myOptions={ScissorsOption} />);

    expect(screen.getByText(/playerhand: 2/)).toBeInTheDocument();
  });

  it("Should update the optionsReducer with the correct computerHand", () => {
    render(<TestingComponent myOptions={ComputerOption} />);

    const computerHandElement = screen.getByText(/computerhand: \d+/i);

    expect(computerHandElement).toBeInTheDocument();
    const computerHandText = computerHandElement?.textContent;

    if (computerHandText) {
      const parsedComputerHand = parseInt(
        computerHandText.split(":")[1].trim(),
        10
      );

      expect(parsedComputerHand).toBeGreaterThanOrEqual(0);
      expect(parsedComputerHand).toBeLessThanOrEqual(2);
    } else {
      expect(true).toBe(true);
    }
  });
  it("Should update the optionsReducer with Computer Winner", () => {
    render(<TestingComponent myOptions={ComputerWinsOption} />);

    expect(screen.getByText("Computer Wins!")).toBeInTheDocument();
    expect(
      screen.getByText("AI will rule you one day! ~ Computer")
    ).toBeInTheDocument();
  });
  it("Should update the optionsReducer with Player Winner", () => {
    render(<TestingComponent myOptions={PlayerWinsOption} />);

    expect(screen.getByText("Player Wins!")).toBeInTheDocument();
    expect(
      screen.getByText("There is still hope left for Humanity!")
    ).toBeInTheDocument();
  });
  it("Should update the optionsReducer with Draw Results", () => {
    render(<TestingComponent myOptions={DrawOption} />);

    expect(screen.getByText("Draw")).toBeInTheDocument();
    expect(screen.getByText("What a Draw. Play Again!")).toBeInTheDocument();
  });
  it("Should update the optionsReducer with Error when wrong dispatch is passed", () => {
    render(<TestingComponent myOptions={ErrorOption} />);

    expect(screen.getByText("error")).toBeInTheDocument();
    expect(
      screen.getByText("Internal Error,Computer is hurt")
    ).toBeInTheDocument();
  });
});
