import { motion } from "framer-motion";
import { homePage, quizPage } from "../assets";
import { welcomePage } from "../assets";


const HowItWorksSection = () => {
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
      <h2 className="text-2xl text-blue-600 mt-4 font-medium">
        Explore the features and functionality of our quiz platform.
      </h2>

      <div className=" flex justify-between gap-8 mt-8">
        
        <div className=" border-solid border-2 border-yellowish ">
          <img className="object-cover w-full" src={homePage} alt="image of a graduation hat"  />
            <p>
            <h1>Page d'Accueil </h1>
            notre page d'accueil commence par un accueil chaleureux grâce à notre logo distinctif, représentant notre engagement pour un apprentissage ludique. Explorez notre logo élégant, reflet de la passion éducative, puis découvrez notre titre évocateur en dessous. Le bouton de démarrage vous attend, prêt pour une expérience interactive. La navigation fluide de la page facilite la création, le partage et la participation à des quiz passionnants. En résumé, plongez dans l'éducation ludique avec notre plateforme dès maintenant.
              </p>
          </div>
        <div className=" border-solid border-2 border-yellowish ">
          <img className="object-cover w-full" src={welcomePage} alt="image of a graduation hat" />
          <h3>Home Page <span className="use-content"></span></h3>
          <p>
            S'ouvre sur un accueil chaleureux par notre logo distinctif, symbole de notre engagement pour un apprentissage ludique et interactif.
            Propose l'exploration d'un logo élégant, une représentation dynamique de notre passion éducative offrant une expérience engageante.
            Présente un titre évocateur juste en dessous, ouvrant la porte à un monde captivant de connaissances et de divertissement.
            Attend votre clic sur un bouton de démarrage bien en évidence, prêt à vous propulser dans une expérience interactive et stimulante.
          </p>
        </div>
        <div className="  border-solid border-2 border-yellowish ">
          <img className="object-cover w-full" src={quizPage} alt="image of a graduation hat" />
          <h3>Create Your Quiz: <span className="use-content"></span></h3>
          <p>

            Personnalisez Votre Aventure de Quiz :
            Choisissez parmi une gamme de 20 questions passionnantes et personnalisez votre expérience en sélectionnant votre spécialité préférée et le niveau de difficulté qui vous convient.
            Explorez Vos Domaines d'Intérêt :
            Plongez dans le monde des quiz en ayant le contrôle total. Sélectionnez la spécialité qui suscite votre curiosité parmi nos 20 questions soigneusement élaborées.
            Adaptez le Défi à Votre Niveau :
            Du débutant à l'expert, ajustez le niveau de difficulté selon votre aisance. Notre page de quiz offre une expérience adaptable pour tous les niveaux de connaissances.
            Créez Votre Propre Parcours d'Apprentissage :
            Avec 20 questions à portée de main, créez votre propre parcours d'apprentissage en choisissant la spécialité qui vous passionne le plus et défiez-vous avec des niveaux de difficulté progressifs.
          </p>
        </div>
        </div>
    </motion.section>
    


  );
};

export default HowItWorksSection;
