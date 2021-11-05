import React from 'react';
import App from './App';
import  { ThemeProvider } from './ThemeContext';

function Theme () {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default Theme;


/* File index.js ở phạm vi bên ngoài 

import ReactDOM from 'react-dom';
import Theme from './Theme';

ReactDOM.render(
  <Theme />,
  document.getElementById('root')
);

*/
