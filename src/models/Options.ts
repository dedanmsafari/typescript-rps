export enum HandOptions {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  computer = "computer",
}

type HandActions = {
  type: HandOptions.rock | HandOptions.paper | HandOptions.scissors;
  payload: {
    playerHand: number;
    runtime: boolean;
  };
};

export type ComputerActions = {
  type: HandOptions.computer;
  payload: () => {
    computerHand: number;
    runtime: boolean;
  };
};

export type GameActions = HandActions | ComputerActions;

export type Options = {
  name: HandOptions.rock | HandOptions.paper | HandOptions.scissors;
  icon: React.JSX.Element;
  dispatch: HandActions;
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
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
