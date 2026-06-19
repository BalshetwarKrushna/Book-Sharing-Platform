import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Categories from "../components/Categories";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Categories />

    </>
  );
}

export default Home;