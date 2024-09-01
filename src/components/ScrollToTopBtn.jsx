import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-coral-red text-white rounded-full 
        shadow-lg transition-opacity duration-300 ease-in-out z-20 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopBtn;
