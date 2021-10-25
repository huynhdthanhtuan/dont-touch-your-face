import { useState } from "react";
import Content from "./Content";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginLeft: 100, marginTop: 50 }}>
      <button 
        style={{ margin: 10 }}
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>

      {show && <Content />}
    </div>
  );
}

export default App;
