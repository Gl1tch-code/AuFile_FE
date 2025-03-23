import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { THEME_VALUES } from "../../utils/constants";
import { ThemeType } from "../../utils/types";

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const localStorageTheme = localStorage.getItem("theme") as ThemeType;

  const isValidTheme = (theme: string | null): theme is ThemeType =>
    theme === "dark" || theme === "light";
  const [theme, setTheme] = useState<ThemeType>(
    isValidTheme(localStorageTheme) ? localStorageTheme : THEME_VALUES.DARK
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.style.setProperty(
      "--primary-text",
      theme === THEME_VALUES.DARK ? "#FFFFFF" : "#1A1E26"
    );
    document.documentElement.style.setProperty(
      "--secondary-text",
      theme === THEME_VALUES.DARK ? "#B3C2E1" : "#2E3646"
    );
    document.documentElement.style.setProperty(
      "--primary-bg-app",
      theme === THEME_VALUES.DARK ? "#2E3646" : "#B3C2E1"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME_VALUES.LIGHT ? THEME_VALUES.DARK : THEME_VALUES.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
