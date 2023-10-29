export enum HandOptions {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export type Options = {
  name: HandOptions;
  icon: React.JSX.Element;
};

type Score = {
  player: number;
  computer: number;
};

type Results = {
  winner: string;
  message: string;
};

export type InitialState = {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: Score;
  results: Results;
};

export type OptionsType = {
  options: Options[];
  initialState: InitialState;
};
