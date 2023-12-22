import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { refactoredQuizQuestionType } from "../types";
import confetti from "canvas-confetti";

const ScoreModal = () => {
  const {
    setIsQuizFinished,
    setIsQuizOngoing,
    setQuizTakerName,
    quizQuestions,
    quizTakerName,
    setIsQuizStarted,
    setIsChoosingCategories,
  } = useStore();

  // reset quiz settings and navigate to Home Page
  function resetQuizSettings() {
    setQuizTakerName!("");
    setIsQuizFinished!(false);
    setIsQuizOngoing!(false);
    setIsQuizStarted!(false);
    setIsChoosingCategories!(false);
  }

  //  navigate back to the welcome page while keeping the quiz taker name  ans isQuizStarted unchanged
  function tryAgain() {
    setIsQuizFinished!(false);
    setIsQuizOngoing!(false);
    setIsChoosingCategories!(false);
  }
  return (
    <motion.section
      className="lg:max-w-[1280px] lg:mx-auto h-full p-4 flex flex-col items-center"
      initial={{ opacity: 0, transform: "translateX(20px) " }}
      animate={{ opacity: 1, transform: "translateX(0px) " }}
      exit={{ opacity: 0, transform: "translateX(-20px) " }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between w-full mb-4">
        <Stats
          quizQuestions={quizQuestions as refactoredQuizQuestionType[]}
          quizTakerName={quizTakerName as string}
        />
      </div>
      <Table quizQuestions={quizQuestions as refactoredQuizQuestionType[]} />
      <div className="flex items-end justify-between w-full mt-2 gap-y-4">
        <button
          className="capitalize  text-base border-2 border-transparent hover:border-yellowish hover:text-yellowish hover:bg-transparent py-4 px-2 bg-yellowish transition-colors duration-200 ease-in-out text-base-100"
          onClick={tryAgain}
        >
          try again ?
        </button>
        <button
          className="capitalize  text-base border-2 border-transparent hover:border-yellowish hover:text-yellowish hover:bg-transparent py-4 px-2 bg-yellowish transition-colors duration-200 ease-in-out text-base-100"
          onClick={resetQuizSettings}
        >
          complete
        </button>
      </div>
    </motion.section>
  );
};

export default ScoreModal;

function Stats({
  quizQuestions,
  quizTakerName,
}: {
  quizQuestions: refactoredQuizQuestionType[];
  quizTakerName: string;
}) {
  const correctAnswersTotal = quizQuestions.reduce(
    (accumulator, currentValue) => {
      let isCorrect = currentValue.possibleAnswers.find(
        (ele) => ele.isCorrect && ele.isSelected
      );

      if (isCorrect) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    },
    0
  );

  useEffect(() => {
    // display Confetti effect if the quiz score is greater than 5
    if (correctAnswersTotal > 5) {
      confetti({
        particleCount: 500,
        spread: 600,
        shapes: ["circle", "star", "square"],
        origin: { x: 0.5, y: 0.1 },
      });
      setTimeout(() => {
        confetti({
          particleCount: 500,
          spread: 600,
          shapes: ["circle", "star", "square"],
          origin: { x: 0.5, y: 0.1 },
        });
      }, 500);
    }
  }, []);

  return (
    <div className="stats shadow   md:stats-horizontal grow">
      <div className="stat p-2 ">
        <div className="stat-title ">Name</div>
        <div className="stat-value capitalize text-yellowish text-xl">
          {quizTakerName}
        </div>
      </div>

      <div className="stat p-2">
        <div className="stat-title">correct answers total</div>
        <div className="stat-value text-neutral text-xl">
          {correctAnswersTotal}
        </div>
      </div>

      <div className="stat p-2">
        <div className="stat-title capitalize">final score</div>

        <div className="stat-value text-xl">
          {correctAnswersTotal} / {quizQuestions.length}
        </div>
      </div>
    </div>
  );
}

function Table({
  quizQuestions,
}: {
  quizQuestions: refactoredQuizQuestionType[];
}) {
  return (
    <div className="overflow-x-auto w-full flex-1">
      <table className="table table-xs md:table-sm lg:table-lg   table-zebra-zebra h-full  ">
        {/* head */}
        <thead>
          <tr className="bg-yellowish/80 text-base-100">
            <th className="bg-[#fafafa]"></th>
            <th className="border border-primary-content">Question</th>
            <th className="border border-primary-content">your Answer</th>
            <th className="border border-primary-content">Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {quizQuestions.map((quizQuestion, index) => {
            const selectedAnswer = quizQuestion.possibleAnswers.find(
              (possibleAnswer) => possibleAnswer.isSelected == true
            );
            const correctAnswer = quizQuestion.possibleAnswers.find(
              (possibleAnswer) => possibleAnswer.isCorrect == true
            );

            return (
              <tr className="border border-primary-content" key={index}>
                <th>{index + 1}</th>
                <td className="border border-primary-content">
                  Question {index + 1}
                </td>
                <td className="border border-primary-content">
                  {selectedAnswer == undefined
                    ? "Skiped"
                    : selectedAnswer?.text}
                </td>
                <td className="border border-primary-content">
                  {correctAnswer?.text}
                </td>
              </tr>
            );
          })}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
}
