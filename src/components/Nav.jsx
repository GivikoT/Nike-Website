import headerLogo from "../images/header-logo.svg";
import Hamburger from "../images/icons/hamburger.svg";
import { navLinks } from "../constants/index";
import { useEffect, useState } from "react";
import closeLogo from "../images/icons/close.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Add or remove the 'no-scroll' class to body based on isMenuOpen
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={Hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer transition"
          />
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-20">
              <ul className="flex flex-col justify-center items-center h-full">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-montserrat leading-[55px] text-2xl text-slate-gray "
                      onClick={toggleMenu} // Close menu when link is clicked
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="absolute top-4 right-4 cursor-pointer transition">
                <img
                  src={closeLogo}
                  alt="close button"
                  onClick={toggleMenu}
                  width={35}
                  height={35}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
