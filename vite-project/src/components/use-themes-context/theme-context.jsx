import { ThemeContext } from ".";
import { useState } from "react";
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
