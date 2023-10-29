import { PropsWithChildren } from "react";
import { createContext } from "../utils/context";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import {
  Options,
  HandOptions,
  InitialState,
  OptionsType,
} from "../models/Options";

const options: Options[] = [
  { name: HandOptions.rock, icon: <FaHandRock size="3em" color="grey" /> },
  { name: HandOptions.paper, icon: <FaHandPaper size="3em" color="brown" /> },
  {
    name: HandOptions.scissors,
    icon: <FaHandScissors size="3em" color="orange" />,
  },
];

const initialState: InitialState = {
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

const [useContext, Provider] = createContext<OptionsType>();

// eslint-disable-next-line react-refresh/only-export-components
export const useHand = useContext;

const OptionsProvider = ({ children }: PropsWithChildren) => {
  const value = {
    options,
    initialState,
  };
  return <Provider value={value}>{children}</Provider>;
};

export default OptionsProvider;
