import { motion } from "framer-motion";

const AboutSection = () => {
  const data = [
    {
      title: "Our Mission",
      description:
        "Connecting Talent with Opportunity We are committed to building bridges between exceptional talent and professional opportunities.At Quiz Recruit, our mission is to streamline the discovery of outstanding talent and connect them with innovative companies.We firmly believe that every quiz we offer is an opportunity to unveil unique skills and propel extraordinary careers.",
    },

    {
      title: "Our Team",
      description:
        "Uprooting the Ordinary, Cultivating the Extraordinary Our team at Quiz Recruit comprises dedicated enthusiasts determined to push the boundaries of the ordinary.From psychology experts to quiz developers, each member contributes to creating a unique platform that transforms how talent and businesses connect.Together, we are driven by the belief that every individual has the potential to make a significant difference in their professional journey.",
    },
    {
      title: "Our Values",
      description:
        "Innovation, Inclusivity, Integrity At Quiz Recruit, we are guided by core principles that form the foundation of our work.Innovation fuels our quest for excellence, inclusivity shapes our diverse community, and integrity defines our commitment to transparency and fairness.These values drive our mission to redefine the recruitment experience and empower individuals to reach their full potential.",
    },
  ];
  return (
    <motion.section
      className=" lg:mx-auto h-full p-8 mt-1 flex flex-col  items-center"
      initial={{ opacity: 0.2, transform: "translateX(10px) scale(.98)" }}
      animate={{ opacity: 1, transform: "translateX(0px) scale(1)" }}
      exit={{ opacity: 0, transform: "translateX(-10px) scale(.98)" }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-4xl text-yellowish mt-8 text-center font-medium sm:text-5xl md:text-7xl">
        About US
      </h1>
      <h1 className="text-3xl text-blue-600 mt-4 font-medium">
        Explore the features and functionality of our quiz platform.
      </h1>

      <div className=" flex justify-between gap-8 mt-28 ">
        {data.map((item, index) => (
          <div
            className="content border-2 border-yellowish rounded-3xl p-2"
            key={index}
          >
            <h1>{item.title}</h1>
            <p className="text-justify flex align-middle text-2xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutSection;
