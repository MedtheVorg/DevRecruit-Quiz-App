import { useStore } from "../hooks/useStore";
import CategoriesModal from "../components/CategoriesModal";
import QuizContainer from "../components/QuizContainer";

const QuizPage = () => {
  const { quizStarted } = useStore();

  {
  }
  return <>{!quizStarted ? <CategoriesModal /> : <QuizContainer />}</>;
};

export default QuizPage;
