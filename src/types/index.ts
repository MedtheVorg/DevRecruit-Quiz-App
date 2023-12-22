import { ReactNode } from "react";

export type StoreContextProps = {
  [index: string]: ReactNode;
};

export type StoreContextType = {
  quizTakerName?: string;
  setQuizTakerName?: React.Dispatch<React.SetStateAction<string>>;
  quizData?: quizDataType[];
  selectedCategories?: string[];
  setSelectedCategories?: React.Dispatch<React.SetStateAction<string[]>>;
  isQuizOngoing?: boolean;
  setIsQuizOngoing?: React.Dispatch<React.SetStateAction<boolean>>;
  isQuizFinished?: boolean;
  setIsQuizFinished?: React.Dispatch<React.SetStateAction<boolean>>;
  quizQuestions?: refactoredQuizQuestionType[];
  setQuizQuestions?: React.Dispatch<
    React.SetStateAction<refactoredQuizQuestionType[]>
  >;
  isQuizStarted?: boolean;
  setIsQuizStarted?: React.Dispatch<React.SetStateAction<boolean>>;
  isChoosingCategories?: boolean;
  setIsChoosingCategories?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type quizDataType = {
  name: string;
  data: quizQuestionType[];
};

export type quizQuestionType = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type refactoredQuizQuestionType = {
  question: string;
  possibleAnswers: PossibleAnswerType[];
};
export type PossibleAnswerType = {
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
};
export type CategoryProps = {
  categoryName: string;
};
