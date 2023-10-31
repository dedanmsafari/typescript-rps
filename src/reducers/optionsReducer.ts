import { HandOptions } from "./../models/Options";
import { OptionsState, GameActions } from "./../models/Options";
import { useReducer } from "react";

const State: OptionsState = {
  playerHand: 0,
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
};

type OptionsReducerType = (
  state: OptionsState,
  action: GameActions
) => OptionsState;

const optionsReducer: OptionsReducerType = (state, action) => {
  if (action.type === HandOptions.rock) {
    return {
      ...state,
      playerHand: action.payload.playerHand,
      runTime: action.payload.runtime,
    };
  }
  if (action.type === HandOptions.paper) {
    return {
      ...state,
      playerHand: action.payload.playerHand,
      runTime: action.payload.runtime,
    };
  }
  if (action.type === HandOptions.scissors) {
    return {
      ...state,
      playerHand: action.payload.playerHand,
      runTime: action.payload.runtime,
    };
  }
  return State;
};

const useOptions = () => {
  return useReducer(optionsReducer, State);
};

export default useOptions;
