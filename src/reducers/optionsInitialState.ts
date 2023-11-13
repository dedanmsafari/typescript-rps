import { OptionsState } from "../models/Options";

export const State: OptionsState = {
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
