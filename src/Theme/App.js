import { useState } from "react";
import Content from "./Content";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <ThemeProvider>
      <div style={{ margin: 50 }}>
        <button 
          style={{ margin: 10 }}
          onClick={() => setShow(!show)}
        >
          Toggle
        </button>

        {show && <Content />}
      </div>
    </ThemeProvider>
  );
}

export default App;
