import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import CategoriesModal from "../components/CategoriesModal";

const QuizPage = () => {
  const { quizTakerName, quizData } = useStore();
  const [currentTab, seetCurrentTab] = useState(0);
  useEffect(() => {
    console.log(quizData);
  }, []);

  return (
    <>
      <div>nav</div>
      <CategoriesModal />
    </>
  );
};

export default QuizPage;
