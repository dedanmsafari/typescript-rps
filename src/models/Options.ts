export enum HandOptions {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  computer = "computer",
  runTimer = "runTimer",
  computerWins = "computerWins",
  playerWins = "playerWins",
  draw = "draw",
}

type HandActions = {
  type: HandOptions.rock | HandOptions.paper | HandOptions.scissors;
  payload: {
    playerHand: number;
  };
};

export type TimerAction = {
  type: HandOptions.runTimer;
  payload: {
    runtimer: boolean;
  };
};
export type ComputerActions = {
  type: HandOptions.computer;
  payload: () => {
    computerHand: number;
    runtimer: boolean;
  };
};

export type ResultsAction = {
  type: HandOptions.computerWins | HandOptions.playerWins | HandOptions.draw;
  payload: {
    winner: string;
    message: string;
  };
};

export type GameActions =
  | HandActions
  | ComputerActions
  | TimerAction
  | ResultsAction;

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
