import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ScrollContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.pageYOffset !== 0;
    setIsScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      "useScrollContext must be used within a ScrollContextProvider"
    );
  }
  return context;
};
