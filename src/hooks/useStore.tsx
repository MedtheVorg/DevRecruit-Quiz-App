import { useContext, createContext, useState } from "react";

// custom data
import { quizData } from "../data";

// importing types
import {
  StoreContextProps,
  StoreContextType,
  refactoredQuizQuestionType,
} from "../types";

// create a context with an object as the  initial value
const storeContext = createContext({});

// simple function that consumes the context and returns its values
export const useStore = () => {
  const storeContextValues: StoreContextType = useContext(storeContext);

  return storeContextValues;
};

// wrapper  componenet
const StoreContext = ({ children }: StoreContextProps) => {
  const [quizQuestions, setQuizQuestions] = useState<
    refactoredQuizQuestionType[]
  >([]);
  const [quizTakerName, setQuizTakerName] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizOngoing, setIsQuizOngoing] = useState<boolean>(false);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [isChoosingCategories, setIsChoosingCategories] =
    useState<boolean>(false);

  return (
    <storeContext.Provider
      value={{
        quizTakerName,
        setQuizTakerName,
        quizData,
        selectedCategories,
        setSelectedCategories,
        isQuizOngoing,
        setIsQuizOngoing,
        isQuizFinished,
        setIsQuizFinished,
        quizQuestions,
        setQuizQuestions,
        isQuizStarted,
        setIsQuizStarted,
        isChoosingCategories,
        setIsChoosingCategories,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreContext;
