
import { useState, createContext } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Provider
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const handleToggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const value = { theme, handleToggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };
