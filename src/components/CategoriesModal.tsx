import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CategoryProps } from "../types";
import { useStore } from "../hooks/useStore";
import { quizData } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoriesModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { selectedCategories, setSelectedCategories, setIsChoosingCategories } =
    useStore();

  useEffect(() => {
    // show modal
    dialogRef.current?.showModal();

    // reset selected categories array (on Component did mount)
    setSelectedCategories!([]);

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

  function handleStartButtonClicked(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    if (selectedCategories?.length! > 0) {
      dialogRef.current?.close();

      setIsChoosingCategories!(false);
    }
  }

  function updateSelectedCategories(categoryName: string) {
    setSelectedCategories!((prev) => {
      const exists = prev.find((ele) => ele == categoryName);
      if (exists) {
        return prev.filter((ele) => ele != categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  }
  return (
    <>
      <motion.dialog
        initial={{ opacity: 0, transform: "translateX(20px) " }}
        animate={{ opacity: 1, transform: "translateX(0px) " }}
        exit={{ opacity: 0, transform: "translateX(-20px) " }}
        transition={{ duration: 0.2 }}
        id="my_modal_1"
        className="modal backdrop:bg-dark/40"
        ref={dialogRef}
      >
        <div className="modal-box text-center md:max-w-4xl lg:w-full md:p-16 ">
          <h2 className="text-2xl font-bold md:text-4xl">
            Choose your favourite topic
          </h2>
          <p className="md:text-xl mt-4 mb-16">
            select at least 1 topic to start the quiz.
          </p>
          <div className="flex flex-row gap-4 justify-center flex-wrap mt-4 border-t-2 border-b-2 border-b-lightgray border-t-lightgray py-8 ">
            {quizData.map((category, index) => (
              <button
                onClick={() => updateSelectedCategories(category.name)}
                key={index}
                className="focus:outline-transparent "
              >
                <Categorie categoryName={category.name} />
              </button>
            ))}
          </div>
          <div className="modal-action flex justify-between ">
            <Link to={"/"} className="specialbtn">
              Go Back
            </Link>
            <form method="dialog">
              <button
                className="specialbtn disabled:hover:scale-100  disabled:bg-lightgray disabled:hover:border-dark disabled:hover:text-dark disabled:text-dark  focus:outline-yellowish  disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out  "
                onClick={handleStartButtonClicked}
                disabled={selectedCategories?.length == 0 ? true : false}
              >
                Start
              </button>
            </form>
          </div>
          <span className="countdown font-mono text-6xl"></span>
        </div>
      </motion.dialog>
    </>
  );
};

export default CategoriesModal;

function Categorie({ categoryName }: CategoryProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="  flex flex-row  cursor-pointer md:text-xl lg:text-2xl  transition-colors duration-200 ease-in-out border-dark border-2  "
    >
      <span
        className={`p-[4px] lg:p-4  text-dark font-[500]  duration-200 ease-in-out ${
          isActive ? "bg-yellowish" : "bg-lightgray"
        }`}
      >
        {categoryName}
      </span>
      {isActive && (
        <span>
          <IoClose className="bg-[#333] text-[#fff] h-full w-[30px] duration-200 ease-in-out" />
        </span>
      )}
    </div>
  );
}
