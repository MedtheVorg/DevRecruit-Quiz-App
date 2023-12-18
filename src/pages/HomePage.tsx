import { Route, Routes } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import HowItWorksSection from "../components/HowItWorksSection";
import AboutSection from "../components/AboutSection";
import ErrorPage from "./ErrorPage";
import { PageTransition } from "@steveeeie/react-page-transition";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="bg-[#fff] flex-1">
        <Routes>
          <Route index element={<HeroSection />} />
          <Route path="/info" element={<HowItWorksSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
};
