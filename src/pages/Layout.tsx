import { Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { AnimatePresence } from "framer-motion";
import QuizPage from "./QuizPage";
import {
  AboutSection,
  HomeSection,
  HowItWorksSection,
  NavBar,
} from "../components";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <main className="bg-[#FAFAFA]  h-full ">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomeSection />} />
            <Route path="/info" element={<HowItWorksSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
};
