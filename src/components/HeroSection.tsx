import { Link } from "react-router-dom";
import heroSectionImage from "../assets/heroSectionImage.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className=" p-4 lg:grid lg:grid-cols-2 lg:max-w-[1200px] lg:mx-auto h-full lg:gap-x-8"
      initial={{ opacity: 0.2, transform: "translateX(10px) scale(.98)" }}
      animate={{ opacity: 1, transform: "translateX(0px) scale(1)" }}
      exit={{ opacity: 0, transform: "translateX(-10px) scale(.98)" }}
      transition={{ duration: 0.2 }}
    >
      {/* left side */}
      <div className="  md:text-left flex flex-col gap-3 p-2 lg:justify-center bg-transparent">
        <h1 className="text-dark text-6xl font-medium  ">
          Learn new concepts for each question
        </h1>
        <p className="mt-2 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          fugiat.
        </p>
        <Link to={"/welcome"} className="specialbtn self-start">
          take quiz
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

export default HeroSection;
