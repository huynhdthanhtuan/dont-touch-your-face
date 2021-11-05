// useContext hook
// -> Giúp truyền dữ liệu từ component cha xuống các component cấp con 1 cách dễ dàng

// 1. Create Context
// 2. Provider
// 3. Comsumer

import ContentChildren from "./ContentChildren";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function Content() {
    const themeContext = useContext(ThemeContext);

    return (
      <ThemeContext.Consumer>
        {() => (
          <div>
            <button onClick={themeContext.handleToggleTheme}>
                Toggle theme
            </button>
            <ContentChildren />
          </div>
        )}
      </ThemeContext.Consumer>
    )
}

export default Content;