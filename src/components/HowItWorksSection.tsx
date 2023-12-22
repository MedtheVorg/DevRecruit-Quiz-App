import { motion } from "framer-motion";
import { homePage2, quizPage2, welcomePage2 } from "../assets";
import { NavLink } from "react-router-dom";

const HowItWorksSection = () => {
  const data = [
    {
      title: "Page d'Accueil",
      description:
        "Choisissez Votre Aventure : Personnalisez votre quiz avec 20 questions passionnantes, en sélectionnant votre spécialité et le niveau de difficulté.Explorez Vos Intérêts : Plongez dans des domaines qui vous captivent en choisissant parmi nos 20 questions soigneusement élaborées.Adaptez le Défi : Ajustez le niveau de difficulté selon votre aisance, offrant une expérience adaptable pour tous les niveaux de connaissances.Créez Votre Parcours : Façonnez votre parcours d'apprentissage en choisissant la spécialité qui vous passionne le plus et en défiant vos connaissances avec des niveaux de difficulté progressifs.",
      image: welcomePage2,
      link: "/welcome",
    },

    {
      title: "Home Page",
      description:
        "S'ouvre sur un accueil chaleureux par notre logo distinctif, symbole de notre engagement pour un apprentissage ludique et interactif Propose l'exploration d'un logo élégant, une représentation dynamique de notre passion éducative offrant une expérience engageante Présente un titre évocateur juste en dessous, ouvrant la porte à un monde captivant de connaissances et de divertissement Attend votre clic sur un bouton de démarrage bien en évidence, prêt à vous propulser dans une expérience interactive et stimulante.",
      image: homePage2,
      link: "/",
    },
    {
      title: "Create Your Quiz",
      description:
        "Personnalisez Votre Aventure de Quiz : Sélection de domaine : L'utilisateur choisit un domaine d'intérêt. Démarrage du quiz : En cliquant sur Start, le test de 20 questions commence. Chronomètre : Un timer est en place pour chaque question. Réponses : L'utilisateur répond aux questions tout au long du test. Résultats : À la fin, les résultats du quiz sont affichés.",
      image: quizPage2,
      link: "/quiz",
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
        How it Works ?
      </h1>
      <h1 className="text-2xl text-blue-600 mt-4 font-medium">
        Explore the features and functionality of our quiz platform.
      </h1>

      <div className=" flex justify-between gap-8 mt-28">
        {data.map((item, index) => (
          <NavLink to={item.link}>
            <div className="content" key={index}>
              <img
                className="object-cover w-full flag-item"
                src={item.image}
                alt="image of a graduation hat"
              />
              <h1>{item.title}</h1>
              <p className="text-justify content-item flex align-middle">
                {item.description}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
