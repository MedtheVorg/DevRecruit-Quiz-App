import { motion } from "framer-motion";
import handGraduate from "../assets/Hands-Graduate.svg";

const HowItWorksSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, transform: "translateX(20px) " }}
      animate={{ opacity: 1, transform: "translateX(0px) " }}
      exit={{ opacity: 0, transform: "translateX(-20px) " }}
      transition={{ duration: 0.2 }}
    >
      <section className="flex flex-col items-center gap-y-8 mt-8 md:text-xl">
        <div className="text-6xl md:text-8xl">
          <span className="relative ">
            <img
              src={handGraduate}
              alt="handGraduate image"
              className={` absolute inline-block top-[-8px] left-[-17px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]  md:top-[-20px] md:left-[-37px] object-cover`}
            />
            Dev
          </span>
          <span className="text-yellowish">Recruit</span>
        </div>
      </section>
    </motion.section>
  );
};

export default HowItWorksSection;
