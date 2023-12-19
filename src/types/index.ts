import { ReactNode } from "react";

export type StoreContextProps = {
  [index: string]: ReactNode;
};
export type StoreContextType = {
  quizTakerName?: string;
  setQuizTakerName?: React.Dispatch<React.SetStateAction<string>>;
  quizData?: quizDataType;
};

export type quizDataType = {
  frontEnd: quizQuestionType[];
  backEnd: quizQuestionType[];
  fullStack: quizQuestionType[];
  frameworks: quizQuestionType[];
  languages: quizQuestionType[];
};

export type quizQuestionType = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type CategoryProps = {
  categoryName: string;
};
