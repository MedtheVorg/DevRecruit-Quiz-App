import { ReactNode } from "react";

export type StoreContextProps = {
  [index: string]: ReactNode;
};
export type StoreContextType = {
  quizTakerName?: string;
  setQuizTakerName?: React.Dispatch<React.SetStateAction<string>>;
  quizData?: quizDataType[];
  selectedCategories?: string[];
  setSetSelectedCategories?: React.Dispatch<React.SetStateAction<string[]>>;
  quizStarted?: boolean;
  setQuizStarted?: React.Dispatch<React.SetStateAction<boolean>>;
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
  possibleAnswers: refactoredQuizQuestionPossibleAnswerType[];
};
export type refactoredQuizQuestionPossibleAnswerType = {
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
};
export type CategoryProps = {
  categoryName: string;
};

export type selectedAnswerType = {
  questionIndex: number;
  selectedAnswerId: number;
  selectedAnswer: string;
  correctAnswer: string;
  isSelected: boolean;
};
