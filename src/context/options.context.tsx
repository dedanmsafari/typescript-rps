import { PropsWithChildren } from "react";
import { createContext } from "../utils/context";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { Options, HandOptions, OptionsType } from "../models/Options";
import { useOptions } from "../reducers/optionsReducer";

const options: Options[] = [
  { name: HandOptions.rock, icon: <FaHandRock size="3em" color="grey" /> },
  { name: HandOptions.paper, icon: <FaHandPaper size="3em" color="brown" /> },
  {
    name: HandOptions.scissors,
    icon: <FaHandScissors size="3em" color="orange" />,
  },
];

const [useContext, Provider] = createContext<OptionsType>();

// eslint-disable-next-line react-refresh/only-export-components
export const useHand = useContext;

const OptionsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useOptions();

  const value = {
    options,
    state,
    dispatch,
  };
  return <Provider value={value}>{children}</Provider>;
};

export default OptionsProvider;
