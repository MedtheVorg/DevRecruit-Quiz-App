import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      className="lg:max-w-[1280px] lg:mx-auto h-full p-4"
      initial={{ opacity: 0, transform: "translateX(20px) " }}
      animate={{ opacity: 1, transform: "translateX(0px) " }}
      exit={{ opacity: 0, transform: "translateX(-20px) " }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-6xl">About Us</h1>
      <section className="flex flex-col gap-y-8 mt-8 md:text-xl">
        <p>
          Welcome to devRecruit, the ultimate web application designed to test
          your knowledge and skills in various aspects of software development.
          Whether you're a seasoned developer looking to challenge yourself or a
          beginner eager to assess your progress, devRecruit is here to help you
          showcase your expertise.
        </p>
        <p>
          With devRecruit, you can embark on an exciting journey of
          self-discovery through a series of comprehensive quizzes. Our quizzes
          cover a wide range of topics, including frontend development, backend
          development, frameworks, programming languages, and full-stack
          development. Each quiz is carefully crafted to evaluate your
          understanding and proficiency in these crucial areas.
        </p>
        <p>
          Are you a master of HTML, CSS, and JavaScript? Take our frontend
          development quiz to demonstrate your ability to create stunning user
          interfaces and bring designs to life. If you're more inclined towards
          server-side programming and databases, our backend development quiz
          will put your knowledge of languages like Python, Java, or C# to the
          test.
        </p>
        <p>
          devRecruit also offers quizzes on popular frameworks such as React,
          Angular, Django, and Laravel. These quizzes will assess your
          familiarity with these powerful tools and determine your expertise in
          leveraging their features to build robust and scalable applications.
        </p>
        <p>
          And for those aspiring to be well-rounded developers, our full-stack
          development quiz will challenge you to demonstrate your proficiency in
          both frontend and backend technologies. Showcasing your ability to
          seamlessly integrate different components and create end-to-end
          solutions is key to success in today's fast-paced development
          landscape.
        </p>
        <p>
          Whether you're a job seeker looking to impress potential employers or
          a student aiming to measure your progress, devRecruit provides a
          valuable platform to showcase your skills. Earn badges and
          certificates as you conquer each quiz, and share your achievements
          with the world.
        </p>
        <p>
          So what are you waiting for? Join devRecruit now and unlock your true
          potential as a software developer. Test your knowledge, challenge
          yourself, and stand out from the crowd. The future of your career
          starts here.
        </p>
      </section>
    </motion.section>
  );
};

export default AboutSection;
