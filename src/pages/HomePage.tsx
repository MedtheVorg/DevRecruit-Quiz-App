import { Route, Routes, useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import HowItWorksSection from "../components/HowItWorksSection";
import AboutSection from "../components/AboutSection";
import ErrorPage from "./ErrorPage";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "../components/WelcomeSection";
import QuizPage from "./QuizPage";

export const HomePage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/quiz" ? <NavBar /> : null}
      <main className="bg-[#FAFAFA] flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HeroSection />} />
            <Route path="/info" element={<HowItWorksSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
};
