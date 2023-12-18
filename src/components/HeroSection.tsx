import { Link } from "react-router-dom";
import heroSectionImage from "../assets/heroSectionImage.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className=" p-4 lg:grid lg:grid-cols-2 lg:max-w-[1280px] lg:mx-auto h-full lg:gap-x-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* left side */}
      <div className="  md:text-left flex flex-col gap-3 p-2 lg:justify-center">
        <h1 className="text-dark text-6xl font-medium  ">
          Learn new concepts for each question
        </h1>
        <p className="mt-2 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          fugiat.
        </p>
        <Link to={"/quiz"} className="specialbtn self-start">
          start quiz
        </Link>
      </div>
      {/* right side */}
      <div className="right ">
        <img
          src={heroSectionImage}
          alt="heroSectionImage"
          className="object-cover w-full h-full"
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;
