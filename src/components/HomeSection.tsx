import { Link } from "react-router-dom";
import { heroSectionImage } from "../assets";
import { motion } from "framer-motion";
import { useStore } from "../hooks/useStore";

const HomeSection = () => {
  const { isQuizOngoing, setIsQuizStarted } = useStore();
  return (
    <motion.section
      className=" p-4 lg:grid lg:grid-cols-2 lg:max-w-[1400px] lg:mx-auto h-full lg:gap-x-8"
      initial={{ opacity: 0, transform: "translateX(20px) " }}
      animate={{ opacity: 1, transform: "translateX(0px) " }}
      exit={{ opacity: 0, transform: "translateX(-20px) " }}
      transition={{ duration: 0.2 }}
    >
      {/* left side */}
      <div className="  md:text-left flex flex-col gap-3 p-2 lg:justify-center bg-transparent">
        <h1 className="text-dark text-4xl lg:text-6xl font-medium  ">
          Unlock Your Coding Potential with devrecruit
        </h1>
        <p className="mt-2 mb-4">
          Empower your coding journey at devrecruit. Dive into quizzes covering
          frontend, backend, full-stack, frameworks, and programming languages.
          Whether you're a pro or a beginner, prove your skills and seize
          opportunities. Start your quiz now for a tech-enhanced future!
        </p>
        <Link
          to={"/quiz"}
          onClick={() => {
            setIsQuizStarted!(true);
          }}
          className="specialbtn self-start capitalize"
        >
          {isQuizOngoing ? "resume Quiz" : "take quiz"}
        </Link>
      </div>
      {/* right side */}
      <div className="right ">
        <img
          src={heroSectionImage}
          alt="heroSectionImage"
          className="object-cover   w-full h-full"
        />
      </div>
    </motion.section>
  );
};

export default HomeSection;
