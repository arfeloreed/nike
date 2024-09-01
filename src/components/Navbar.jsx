import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../variables";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Nike brand logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/*desktop navigation*/}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile menu toggle button*/}
        <div className="lg:hidden">
          <button onClick={handleToggleMenu}>
            <img src={hamburger} alt="Toggle menu" width={25} height={25} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-full"
          } transition-all duration-500 ease-in-out overflow-hidden absolute top-20 
            left-0 w-full bg-white shadow-lg lg:hidden z-10`}
        >
          <ul className="flex flex-col items-center gap-8 py-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  onClick={handleToggleMenu} // Close the menu when an item is clicked
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
