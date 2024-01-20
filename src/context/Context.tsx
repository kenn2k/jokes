import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IJoke } from "../App";

type ContainerProps = {
  children: ReactNode;
};

type TypeContext = {
  jokes: IJoke[];
  setJokes: Dispatch<SetStateAction<IJoke[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const TypeContext = createContext<TypeContext>({
  jokes: [],
  setJokes: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

const ContextProvider = ({ children }: ContainerProps) => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <TypeContext.Provider value={{ jokes, setJokes, isLoading, setIsLoading }}>
      {children}
    </TypeContext.Provider>
  );
};

export default ContextProvider;
