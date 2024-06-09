"use client";

import About from "@/components/About";
// import { navItems } from "@/data";
import Hero from "../components/Hero"
import Navbar from "@/components/Navbar";
import Integrations from "@/components/Integrations";
import Ways from "@/components/Ways";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Safety from "@/components/Safety";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <About />
        <Integrations/>
        <Ways/>
        <Services/>
        <Features/>
        <Safety/>
        <Faq />
        <Footer />
      </div>
    </main>
  );
};

export default Home;