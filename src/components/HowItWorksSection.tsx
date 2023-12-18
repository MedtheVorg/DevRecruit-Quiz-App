import { motion } from "framer-motion";

const HowItWorksSection = () => {
  return (
    <motion.section
      className="lg:max-w-[1280px] lg:mx-auto h-full p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>How it Works ?</h1>
    </motion.section>
  );
};

export default HowItWorksSection;
