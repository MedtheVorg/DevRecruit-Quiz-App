import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import _, { set } from "lodash";
import {
  quizQuestionType,
  refactoredQuizQuestionType,
  selectedAnswerType,
} from "../types";

import { singleArrow, doubleArrow } from "../assets";

const QuizContainer = () => {
  const { quizTakerName, quizData, selectedCategories } = useStore();
  const [currentActiveQuestionIndex, setCurrentActiveQuestionIndex] =
    useState(1);
  const [quizQuestions, setquizQuestions] = useState<
    refactoredQuizQuestionType[]
  >([]);
  const [nextButtonText, setNextButtonText] = useState("next");

  useEffect(() => {
    // generate 10 random Questions bes on selected categories
    function getQuestions() {
      let result: any = [];
      selectedCategories?.forEach((category, index) => {
        quizData?.forEach((quizDataObject) => {
          if (category == quizDataObject.name) {
            result.push(
              ..._.shuffle(quizDataObject.data).slice(0, index == 2 ? 4 : 3)
            );
          }
        });
      });
      result = result.map((ele: quizQuestionType) => {
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
      setTimeout(() => {
        setquizQuestions(_.shuffle(result));
      }, 1000);
    }
    getQuestions();
  }, []);

  function getCorrespondingStyle(index: number) {
    if (currentActiveQuestionIndex > index) {
      //TODO : change question color based on user answer
      return "bg-lightgray text-dark/50";
    } else if (currentActiveQuestionIndex == index) {
      return "bg-yellowish text-[#fff]";
    }
  }

  console.log("quizQuestions", quizQuestions);

  return (
    <div className="bg-info h-full">
      <div className="h-full grid grid-cols-4 grid-rows-4 gap-2 md:gap-6 p-2 md:p-6 lg:p-20">
        {/* questions steps */}
        <div
          className={` p-2 rounded-md md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 
          col-start-1 col-end-5 row-start-1 row-end-2 md:p-4 ${
            quizQuestions?.length == 0 ? "skeleton bg-lightgray" : "bg-[#fff]"
          }`}
        >
          {quizQuestions?.length > 0 && (
            <ul className="flex flex-col gap-y-2  h-full items-stretch justify-between transition-colors duration-300 ease-in-out overflow-y-auto">
              {quizQuestions.length > 0 &&
                quizQuestions.map((quizQuestion, index) => {
                  return (
                    <li
                      key={index}
                      className={`flex flex-row p-2 gap-y-[2px] items-center justify-between text-left shadow-lg transition-colors duration-300 ease-in-out ${getCorrespondingStyle(
                        index
                      )}`}
                    >
                      <p className="">
                        {index + 1} -{" "}
                        {quizQuestion.question.slice(0, 20) + "..."}
                      </p>
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
            quizQuestions?.length == 0 ? " skeleton bg-lightgray" : "bg-[#fff]"
          }
          `}
        >
          {/* question */}
          {quizQuestions?.length > 0 && (
            <div className=" h-full   flex flex-col">
              <p className=" text-2xl md:text-3xl leading-relaxed bg-yellowish p-4 text-[#fff] basis-[30%] ">
                {quizQuestions[currentActiveQuestionIndex].question}
              </p>
              <ul className="p-4 flex flex-col justify-evenly basis-[60%]">
                {quizQuestions[currentActiveQuestionIndex].possibleAnswers.map(
                  (possibleAnswer, possibleAnswerIndex) => {
                    return (
                      <li
                        key={possibleAnswerIndex}
                        className={`bg-lightgray py-4 px-2 cursor-pointer hover:bg-yellowish/50 ${
                          possibleAnswer.isSelected ? "bg-yellowish/50" : ""
                        }`}
                        onClick={() => {
                          setquizQuestions((prevState) => {
                            console.log("previous state", prevState);

                            const updatedQuizQuestions = prevState.map(
                              (question, index) => {
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
                              }
                            );
                            console.log(updatedQuizQuestions);
                            return updatedQuizQuestions;
                          });
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
                      if (nextButtonText == "finish") {
                        setNextButtonText("next");
                      }
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
                <div>
                  <button
                    className="inline-flex items-center gap-x-2 capitalize bg-yellowish p-4 text-[#fff] font-medium  "
                    onClick={() => {
                      if (currentActiveQuestionIndex < 9) {
                        setCurrentActiveQuestionIndex((prev) => {
                          if (prev + 1 == 9) {
                            setNextButtonText("finish");
                          }
                          return prev + 1;
                        });
                      }
                    }}
                  >
                    {nextButtonText}
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
            quizQuestions.length == 0 ? "skeleton bg-lightgray" : "bg-[#fff]"
          }`}
        >
          //
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
