import { useEffect, useRef, useState } from "react";
import { useStore } from "../hooks/useStore";
import _ from "lodash";
import { quizQuestionType, PossibleAnswerType } from "../types";
import { singleArrow } from "../assets";
import { useTimer } from "react-timer-hook";
import { motion } from "framer-motion";

const QuizContainer = () => {
  const {
    quizData,
    selectedCategories,
    setQuizQuestions,
    quizQuestions,
    setIsQuizFinished,
  } = useStore();
  const [currentActiveQuestionIndex, setCurrentActiveQuestionIndex] =
    useState(0);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { minutes, seconds, pause } = useTimer({
    autoStart: true,
    expiryTimestamp: new Date(new Date().getTime() + 5 * 60 * 1000),
    onExpire: () => showScoreModal(),
  });

  useEffect(() => {
    // generate 10 random Questions based on selected categories
    function getQuestions() {
      let result: any = [];

      // populate the result array based on selected categories
      selectedCategories?.forEach((category) => {
        quizData?.forEach((quizDataObject) => {
          if (category == quizDataObject.name) {
            result.push(..._.shuffle(quizDataObject.data));
          }
        });
      });

      // refactor and extract 10 questions from the result array
      result = result.slice(0, 10).map((ele: quizQuestionType) => {
        return {
          question: ele.question,
          possibleAnswers: [
            {
              text: ele.incorrect_answers[0],
              isSelected: false,
              isCorrect: false,
            },
            {
              text: ele.incorrect_answers[1],
              isSelected: false,
              isCorrect: false,
            },
            {
              text: ele.incorrect_answers[2],
              isSelected: false,
              isCorrect: false,
            },
            {
              text: ele.correct_answer,
              isSelected: false,
              isCorrect: true,
            },
          ],
        };
      });

      //after 1 second  update quizQuestions State
      setTimeout(() => {
        setQuizQuestions!(_.shuffle(result));
      }, 1000);
    }

    getQuestions();
  }, []);

  function getCorrespondingStyle(index: number) {
    if (currentActiveQuestionIndex > index) {
      return "bg-lightgray text-dark/50";
    } else if (currentActiveQuestionIndex == index) {
      return "bg-yellowish text-[#fff]";
    }
  }

  // quiz is finished
  function showScoreModal() {
    setIsQuizFinished!(true);
    pause();
  }

  // update the quiz questions array based on selected answer
  function updateQuizQuestions(possibleAnswer: PossibleAnswerType) {
    setQuizQuestions!((prevState) => {
      const updatedQuizQuestions = prevState.map((question, index) => {
        if (index == currentActiveQuestionIndex) {
          question.possibleAnswers.forEach((answer) => {
            if (answer.text == possibleAnswer.text) {
              answer.isSelected = true;
            } else {
              answer.isSelected = false;
            }
          });
        }
        return question;
      });
      return updatedQuizQuestions;
    });
  }
  return (
    <motion.div
      className="bg-background h-full "
      initial={{ opacity: 0, transform: "translateX(20px) " }}
      animate={{ opacity: 1, transform: "translateX(0px) " }}
      exit={{ opacity: 0, transform: "translateX(-20px) " }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-full grid grid-cols-4 grid-rows-4 gap-2 md:gap-6 p-2 md:p-6 lg:p-12 lg:pb-6">
        {/* questions steps */}
        <div
          className={` p-2 rounded-md md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 
          col-start-1 col-end-5 row-start-1 row-end-2 md:p-4 ${
            quizQuestions!?.length == 0
              ? "skeleton cursor-not-allowed bg-lightgray"
              : "bg-[#fff]"
          }`}
        >
          {quizQuestions!?.length > 0 && (
            <ul className="flex flex-col gap-y-2  h-full items-stretch justify-between transition-colors duration-300 ease-in-out overflow-y-auto">
              {quizQuestions!.length > 0 &&
                quizQuestions!.map((quizQuestion, index) => {
                  return (
                    <li
                      key={index}
                      className={`flex flex-row p-2 gap-y-[2px] items-center justify-between text-left shadow-lg transition-colors duration-300 ease-in-out cursor-pointer ${getCorrespondingStyle(
                        index
                      )}`}
                      onClick={() => {
                        setCurrentActiveQuestionIndex(index);
                      }}
                    >
                      <p className="hidden lg:block">
                        {index + 1} -{" "}
                        {quizQuestion.question.slice(0, 20) + "..."}
                      </p>

                      <p className="lg:hidden"> Question - {index + 1}</p>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>

        {/* active questions */}
        <div
          className={`  rounded-md md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-4
          col-start-1 col-end-5 row-start-2 row-end-5 ${
            quizQuestions?.length == 0
              ? " skeleton cursor-not-allowed bg-lightgray"
              : "bg-[#fff]"
          }
          `}
        >
          {/* question */}
          {quizQuestions!?.length > 0 && (
            <div className=" h-full   flex flex-col">
              <p className=" text-2xl md:text-3xl leading-relaxed bg-yellowish p-4 text-[#fff] basis-[30%] ">
                {quizQuestions![currentActiveQuestionIndex].question}
              </p>
              <ul className="p-4 flex flex-col justify-evenly basis-[60%]">
                {quizQuestions![currentActiveQuestionIndex].possibleAnswers.map(
                  (possibleAnswer, possibleAnswerIndex) => {
                    return (
                      <li
                        key={possibleAnswerIndex}
                        className={`bg-lightgray py-4 px-2 cursor-pointer hover:bg-yellowish/50 ${
                          possibleAnswer.isSelected ? "bg-yellowish/50" : ""
                        }`}
                        onClick={() => {
                          updateQuizQuestions(possibleAnswer);
                        }}
                      >
                        {possibleAnswerIndex + 1} - {possibleAnswer.text}
                      </li>
                    );
                  }
                )}
              </ul>

              {/* controllers */}
              <div className="flex flex-row items-center  justify-between px-2 text-sm md:text-xl bg-lightgray basis-[10%]">
                <button
                  className="inline-flex items-center gap-x-2 capitalize bg-lightgray p-4 text-dark font-medium "
                  onClick={() => {
                    if (currentActiveQuestionIndex > 0) {
                      setCurrentActiveQuestionIndex((prev) => prev - 1);
                    }
                  }}
                >
                  <img
                    src={singleArrow}
                    alt="image of an arrow"
                    className="w-3 h-3 object-cover rotate-180 "
                  />
                  previous
                </button>
                <Timer minutes={minutes} seconds={seconds} />
                <div>
                  <button
                    className="inline-flex items-center gap-x-2 capitalize bg-yellowish p-4 text-[#fff] font-medium  "
                    onClick={() => {
                      if (
                        currentActiveQuestionIndex <
                        quizQuestions!.length - 1
                      ) {
                        setCurrentActiveQuestionIndex((prev) => {
                          return prev + 1;
                        });
                      } else {
                        // quiz is over
                        setIsDialogOpen(true);
                      }
                    }}
                  >
                    {currentActiveQuestionIndex < quizQuestions!.length - 1
                      ? "next"
                      : "finish"}
                    <img
                      src={singleArrow}
                      alt="image of an arrow"
                      className="w-3 h-3 object-cover "
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* general info */}
        <div
          className={` p-2 rounded-md md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-5
          col-start-1 col-end-5 row-start-4 row-end-5 hidden md:block ${
            quizQuestions!.length == 0
              ? "skeleton cursor-not-allowed bg-lightgray"
              : "bg-[#fff]"
          }`}
        >
          {quizQuestions!?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold"> Quiz rules : </h2>
              <ul className="pl-8 pt-2  flex flex-col gap-y-2 list-disc">
                {[
                  "Choose one answer per question to proceed.",
                  'Navigate between questions using the "Previous" and "Next"buttons. or by clicking on a question step',
                  "Complete the quiz within the 5-minute time limit.",
                  "If the timer runs out, the quiz will automatically end.",
                ].map((rule, index) => {
                  return <li key={index}>{rule}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      {isDialogOpen && (
        <ConfirmModal
          setIsDialogOpen={setIsDialogOpen}
          showScoreModal={showScoreModal}
        />
      )}
    </motion.div>
  );
};

export default QuizContainer;

function Timer({
  minutes,
  seconds,
  ...props
}: {
  minutes: number;
  seconds: number;
}) {
  return (
    <div className="flex gap-5" {...props}>
      <div>
        <span className="countdown font-poppins text-4xl">
          <span style={{ "--value": minutes } as any}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-poppins text-4xl">
          <span style={{ "--value": seconds } as any}></span>
        </span>
        sec
      </div>
    </div>
  );
}

const ConfirmModal = ({
  setIsDialogOpen,
  showScoreModal,
}: {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showScoreModal: () => void;
}) => {
  useEffect(() => {
    // prevent modal from closing when ESC key is pressed
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) event.preventDefault();
    });
    // remove event listener when component is unmounted
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.keyCode === 27) event.preventDefault();
      });
    };
  }, []);

  function endTheQuiz() {
    showScoreModal();
  }

  function resumeQuiz() {
    setIsDialogOpen(false);
  }
  return (
    <dialog id="my_modal_1" className="modal modal-open " open>
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Are you sure you want to end the quiz?
        </h3>
        <div className="modal-action ">
          <button onClick={endTheQuiz} className="specialbtn  procced">
            End Quiz
          </button>

          <button className=" specialbtn  cancel " onClick={resumeQuiz}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};
