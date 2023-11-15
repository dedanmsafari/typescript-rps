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
  return {
    ...state,
    results: {
      winner: "error",
      message: "We have an Error processing Options reducer",
    },
  };
};

const useOptions = () => {
  return useReducer(optionsReducer, State);
};

export default useOptions;
