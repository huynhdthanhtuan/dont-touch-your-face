import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContentChildren() {
    const themeContext = useContext(ThemeContext);

    return (
        <ThemeContext.Consumer>
            {() => (
                <div
                    style={{
                        width: 800,
                        height: 800,
                        backgroundColor: (themeContext.theme === "light" ? "#ddd" : "#000")
                    }}
                >
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default ContentChildren;
