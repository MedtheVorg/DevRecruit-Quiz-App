import { Navigate } from "react-router-dom";
import {
  CategoriesModal,
  QuizContainer,
  ScoreModal,
  WelcomeModal,
} from "../components";
import { useStore } from "../hooks/useStore";

const QuizPage = () => {
  const { isQuizStarted, isQuizOngoing, isQuizFinished, isChoosingCategories } =
    useStore();

  function switchModals() {
    if (!isQuizStarted) {
      return <Navigate to="/" />;
    } else if (isQuizStarted && !isQuizOngoing) {
      return <WelcomeModal />;
    } else if (
      isQuizStarted &&
      isQuizOngoing &&
      !isQuizFinished &&
      isChoosingCategories
    ) {
      return <CategoriesModal />;
    } else if (
      isQuizStarted &&
      isQuizOngoing &&
      !isQuizFinished &&
      !isChoosingCategories
    ) {
      return <QuizContainer />;
    } else if (isQuizStarted && isQuizOngoing && isQuizFinished) {
      return <ScoreModal />;
    }
  }

  return <>{switchModals()}</>;
};

export default QuizPage;
