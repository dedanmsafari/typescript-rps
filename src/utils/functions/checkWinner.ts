import React from "react";
import { GameActions } from "../../models/Options";
import {
  ComputerWinsOption,
  PlayerWinsOption,
  DrawOption,
} from "../../actions/OptionActions";

type Dispatch = React.Dispatch<GameActions>;

const checkWinner = (dispatch: Dispatch, hand: string, computer: string) => {
  if (hand === computer) {
    dispatch(DrawOption);
  } else if (
    (hand === "rock" && computer === "scissors") ||
    (hand === "paper" && computer === "rock") ||
    (hand === "scissors" && computer === "paper")
  ) {
    dispatch(PlayerWinsOption);
  } else {
    dispatch(ComputerWinsOption);
  }
};

export default checkWinner;
