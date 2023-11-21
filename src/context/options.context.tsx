import { useState, PropsWithChildren } from "react";
import { createContext } from "../utils/context";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { Options, HandOptions, OptionsType } from "../models/Options";
import useOptions from "../reducers/optionsReducer";
import {
  RockOption,
  PaperOption,
  ScissorsOption,
} from "../actions/OptionActions";

const options: Options[] = [
  {
    name: HandOptions.rock,
    icon: <FaHandRock size="3em" color="grey" data-testid="rock" />,
    dispatch: RockOption,
  },
  {
    name: HandOptions.paper,
    icon: <FaHandPaper size="3em" color="brown" data-testid="paper" />,
    dispatch: PaperOption,
  },
  {
    name: HandOptions.scissors,
    icon: <FaHandScissors size="3em" color="orange" data-testid="scissors" />,
    dispatch: ScissorsOption,
  },
];

const [useContext, Provider] = createContext<OptionsType>();

// eslint-disable-next-line react-refresh/only-export-components
export const useHand = useContext;

const OptionsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useOptions();
  const [active, setActive] = useState(false);

  const value = {
    options,
    state,
    dispatch,
    active,
    setActive,
  };
  return <Provider value={value}>{children}</Provider>;
};

export default OptionsProvider;
