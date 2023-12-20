import { useContext, createContext, useState } from "react";

// custom data
import { quizData } from "../data";
import { StoreContextProps, StoreContextType } from "../types";

// create a context with an object as the  initial value
const storeContext = createContext({});

//

// simple function that consumes the context and returns its values
export const useStore = () => {
  const storeContextValues: StoreContextType = useContext(storeContext);

  return storeContextValues;
};

// wrapper  componenet
const StoreContext = ({ children }: StoreContextProps) => {
  const [quizTakerName, setQuizTakerName] = useState("");
  const [selectedCategories, setSetSelectedCategories] = useState<string[]>([
    "FullStack ",
    "Programming Languages",
    "Frameworks",
  ]);
  const [quizStarted, setQuizStarted] = useState<boolean>(true);

  return (
    <storeContext.Provider
      value={{
        quizTakerName,
        setQuizTakerName,
        quizData,
        selectedCategories,
        setSetSelectedCategories,
        quizStarted,
        setQuizStarted,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreContext;
