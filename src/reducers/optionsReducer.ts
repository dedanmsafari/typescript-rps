import { HandOptions } from "./../models/Options";
import { OptionsState, GameActions } from "./../models/Options";
import { useReducer } from "react";
import { State } from "./optionsInitialState";

type OptionsReducerType = (
  state: OptionsState,
  action: GameActions
) => OptionsState;

export const optionsReducer: OptionsReducerType = (state, action) => {
  if (action.type === HandOptions.rock) {
    return {
      ...state,
      playerHand: action.payload.playerHand,
    };
  }
  if (action.type === HandOptions.paper) {
    return {
      ...state,
      playerHand: action.payload.playerHand,
    };
  }
  if (action.type === HandOptions.scissors) {
    return {
      ...state,
      playerHand: action.payload.playerHand,
    };
  }
  if (action.type === HandOptions.computer) {
    return {
      ...state,
      computerHand: action.payload().computerHand,
      runTimer: action.payload().runtimer,
    };
  }
  if (action.type === HandOptions.runTimer) {
    return {
      ...state,
      runTimer: action.payload.runtimer,
    };
  }
  if (action.type === HandOptions.computerWins) {
    return {
      ...state,
      score: {
        ...state.score,
        computer: state.score.computer + 1,
      },
      results: {
        winner: action.payload.winner,
        message: action.payload.message,
      },
    };
  }
  if (action.type === HandOptions.playerWins) {
    return {
      ...state,
      score: {
        ...state.score,
        player: state.score.player + 1,
      },
      results: {
        winner: action.payload.winner,
        message: action.payload.message,
      },
    };
  }
  if (action.type === HandOptions.draw) {
    return {
      ...state,
      score: {
        player: state.score.player + 0.5,
        computer: state.score.computer + 0.5,
      },
      results: {
        winner: action.payload.winner,
        message: action.payload.message,
      },
    };
  }
  return {
    ...state,
    results: {
      winner: "error",
      message: "Internal Error,Computer is hurt",
    },
  };
};

const useOptions = () => {
  return useReducer(optionsReducer, State);
};

export default useOptions;
