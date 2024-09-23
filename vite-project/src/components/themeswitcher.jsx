import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const themeStyle = {
        backgroundColor: theme === "light" ? "lightblue" : "darkgray",
        padding: "50px",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "18px",
        color: theme === "light" ? "darkblue" : "white",
        marginLeft: "150px"
    };

    const buttonStyle = {
        fontSize: "16px", 
        padding: "10px",
        marginTop: "20px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    };

    return (
        <>
            <div className="theme" style={themeStyle}>
                Theme Switcher <br />
                <h4>The current theme is {theme}</h4>
                <button style={buttonStyle} onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    );
};
