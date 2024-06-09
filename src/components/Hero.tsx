import React from "react";

const Hero = () => {
  return (
    <section className="HERO p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
      <div className="HERO flex  justify-between capitalize">
        <div className="LOGO">
          <a
            href="#"
            className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
          >
            {"<Dhairya/>"}
          </a>
        </div>
        <div className="HERO flex gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
          <a href="#about" className=" hover:text-cyan-500">
            Contact
          </a>
          <a href="#experience" className="hover:text-cyan-500">
            Pricing
          </a>
          <a href="#education" className="hover:text-cyan-500 ">
            Documentation
          </a>
          <a href="#projects" className="hover:text-cyan-500 ">
            Join our community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;