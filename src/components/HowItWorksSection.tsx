import { motion } from "framer-motion";

const HowItWorksSection = () => {
  return (
    <motion.section
      className="lg:max-w-[1280px] lg:mx-auto h-full p-8 flex flex-col items-center"
      initial={{ opacity: 0.2, transform: "translateX(10px) scale(.98)" }}
      animate={{ opacity: 1, transform: "translateX(0px) scale(1)" }}
      exit={{ opacity: 0, transform: "translateX(-10px) scale(.98)" }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-4xl text-dark mt-8 text-center font-medium sm:text-5xl md:text-7xl">
        How it Works ?
      </h1>
      <p className="mt-8 text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur
        explicabo quod dolor quos autem accusamus atque minima! Ab saepe
        incidunt tempore sapiente beatae ut architecto reiciendis fugit quos
        accusamus!
      </p>
    </motion.section>
  );
};

export default HowItWorksSection;
