import { HandOptions } from "../models/Options";
import RandomValue from "../utils/functions/randomVal";

type Action<T = string> = {
  type: T;
};

type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export function createAction<T, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T>(type: T, payload: () => void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

export const RockOption = createAction(HandOptions.rock as HandOptions.rock, {
  playerHand: 0,
});
export const PaperOption = createAction(
  HandOptions.paper as HandOptions.paper,
  {
    playerHand: 1,
  }
);
export const ScissorsOption = createAction(
  HandOptions.scissors as HandOptions.scissors,
  {
    playerHand: 2,
  }
);
export const RunTimerOption = createAction(
  HandOptions.runTimer as HandOptions.runTimer,
  {
    runtimer: false,
  }
);
export const ComputerOption = createAction(
  HandOptions.computer as HandOptions.computer,
  () => ({
    computerHand: RandomValue(),
    runtimer: true,
  })
);
