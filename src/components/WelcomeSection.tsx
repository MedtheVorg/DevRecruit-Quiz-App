import { motion } from "framer-motion";
import { handGraduate } from "../assets";
import { graduteHat } from "../assets";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const { quizTakerName, setQuizTakerName } = useStore();
  const [isValid, setIsValid] = useState<null | Boolean>(null);
  const navigate = useNavigate();
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) {
      setIsValid(false);
      setQuizTakerName!("");
      return;
    }
    navigate("/quiz");
  }

  function handleInputValueChanged(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.trim().length == 0) {
      setIsValid(null);
    } else {
      const regularExpresion = /^[a-zA-Z0-9]*$/;
      setIsValid(regularExpresion.test(event.target.value.trim()));
    }
    setQuizTakerName!(event.target.value);
  }

  useEffect(() => {
    setQuizTakerName!("");
  }, []);

  return (
    <motion.section
      className="lg:max-w-[1280px] lg:mx-auto h-full  text-center grid md:grid-cols-2 "
      initial={{ opacity: 0.2, transform: "translateX(10px) scale(.98)" }}
      animate={{ opacity: 1, transform: "translateX(0px) scale(1)" }}
      exit={{ opacity: 0, transform: "translateX(-10px) scale(.98)" }}
      transition={{ duration: 0.2 }}
    >
      {/* left side */}
      <div className="bg-[#fff] flex flex-col gap-8 items-center justify-center">
        <div className="text-5xl md:text-6xl lg:text-8xl">
          <span className="relative ">
            <img
              src={handGraduate}
              alt="handGraduate image"
              className={` w-[40px] h-[40px] absolute top-[-8px] left-[-14px] object-cover`}
            />
            Dev
          </span>
          <span className="text-yellowish">Recruit</span>
        </div>
        <p className="mt-8 mb-4 text-xl md:text-2xl lg:text-3xl">
          Please Provide Your Name.
        </p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            required
            className={`focus:outline-none border-[2px] border-lightgray border-l-[2px] -[2px] p-4 transition-colors duration-300 ease-out ${
              isValid == true
                ? "border-[#46c26b] "
                : isValid == false
                ? "border-[#db5653] "
                : "border-yellowish "
            }`}
            value={quizTakerName}
            onChange={handleInputValueChanged}
          />
          <button type="submit" className="specialbtn">
            start quiz
          </button>
        </form>
      </div>
      {/* right side */}
      <div className="bg-[#FAFAFA] flex items-center justify-center">
        <img src={graduteHat} alt="image of a graduation hat" className="" />
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
