import { createContext, useMemo, useReducer, useRef, useState } from "react";
import ContentContext from "./ContentContext";
import "./App.css";

export const ThemeContext = createContext();

function AppContext() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <ContentContext />
      </div>
    </ThemeContext.Provider>
  );
}

export default AppContext;
