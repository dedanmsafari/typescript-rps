export enum HandOptions {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export type GameActions = {
  type: HandOptions.rock | HandOptions.paper | HandOptions.scissors;
  payload: {
    playerHand: number;
    runtime: boolean;
  };
};

export type Options = {
  name: HandOptions;
  icon: React.JSX.Element;
  dispatch: GameActions;
};

type Score = {
  player: number;
  computer: number;
};

type Results = {
  winner: string;
  message: string;
};

export type OptionsState = {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: Score;
  results: Results;
};

export type OptionsType = {
  options: Options[];
  state: OptionsState;
  dispatch: React.Dispatch<GameActions>;
};
