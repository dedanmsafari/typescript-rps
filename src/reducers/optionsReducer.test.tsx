import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { optionsReducer } from "./optionsReducer";
import { useEffect, useReducer } from "react";
import { State } from "./optionsInitialState";
import { GameActions } from "../models/Options";
import { ScissorsOption } from "../actions/OptionActions";

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
      <p> playerhand: {state.playerHand}</p>
    </>
  );
};

describe("Options Reducer", () => {
  it("Should update the optionsReducer with the correct playerHand", () => {
    render(<TestingComponent myOptions={ScissorsOption} />);

    expect(screen.getByText(/playerhand: 2/)).toBeInTheDocument();
  });
});
