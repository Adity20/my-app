import { useState, useEffect } from "react";

const Menu = () => {
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
    <div className="text-lg tracking-wider translate-x-[180px] leading-10 border shadow bg-white border-text-slate-300 text-[#00040f]  mt-5 max-w-[150px] p-3 rounded-lg hidden  bg-gradient-to-tl max-sm:block">
      <ul className="pl-2">
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#documentation">Documentation</a>
        </li>
        <li>
          <a href="#join">Join us</a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;