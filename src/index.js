import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// function makeComment (id, detail) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`group-${id}`, {
//         detail: detail
//       })
//     )
//   }, 1500)
// }

// makeComment(1, "Nhóm chat học tập");
// makeComment(2, "Nhóm chat bóng đá");
// makeComment(3, "Nhóm chat tiếng Anh");


ReactDOM.render(
  <React.StrictMode>
    {<App />}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
