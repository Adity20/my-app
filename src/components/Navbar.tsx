import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
     <div className="full-width-banner bg-gradient-amber inset-0 w-[136%]">
      <div className="marquee">
        <span className="text-black">
          Join our community. Learn more
        </span>
      </div>
    </div>


      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex  justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-black to-black bg-clip-text text-transparent dark:text-black max-sm:text-2xl"
            >
              {"Toingg"}
            </a>
          </div>
          <div className="flex items-center justify-center border-2 rounded-full md:justify-end pr-4 md:pr-16">
          <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-8 text-[#00040f] dark:text-[#e1e1e1] ">
            <a href="#about" className="relative group inline-block p-2">
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-amber-600"></span>
              <span className="relative z-10 text-black group-hover:text-white">
                Contact
              </span>
            </a>

            <a href="#experience" className="relative group inline-block p-2">
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-amber-600"></span>
              <span className="relative z-10 text-black group-hover:text-white">
                Pricing
              </span>
            </a>

            <a href="#education" className="relative group inline-block p-2">
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-amber-600"></span>
              <span className="relative z-10 text-black group-hover:text-white">
                Documentation
              </span>
            </a>

            <a href="#projects" className="relative group inline-block p-2">
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-amber-600"></span>
              <span className="relative z-10 text-black group-hover:text-white">
                Join our community
              </span>
            </a>

            <button onClick={handleTheme}>
              {/* {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )} */}
            </button>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
