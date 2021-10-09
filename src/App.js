import { useState } from 'react';

// *Ex1: counter
// function App () {

//   const [counter, setCounter] = useState(1);

//   var handleClickButton = () => setCounter(counter => counter + 1);

//   return (
//     <div className="main">
//       <span>Number: {counter}</span>
//       <button onClick={handleClickButton}>Increase</button>
//     </div>
//   )
// }


// *Ex2: bill total
// function App () {

//   const prices = [10, 20, 30, 40];

//   const [total, setTotal] = useState((
//     prices.reduce(
//       (total, current) => total + current
//     )
//   ));

//   function handleClickButton() {
//     setTotal(total => total + 100);
//   }

//   return (
//     <div className="main">
//       <span>Total: {total}</span>
//       <button onClick={handleClickButton}>Increase</button>
//     </div>
//   )
// }


// *Ex3: update info
function App () {

  const [info, setInfo] = useState({
    name: 'Tuan',
    age: 21,
    school: 'DTU'
  });

  var handleClickButton = function () {
    setInfo({
      ...info,
      school: 'Duy Tan',
      hobby: 'football'
    })
  }

  return (
    <div className="main">
      <div>Info: {JSON.stringify(info)}</div>
      <button onClick={handleClickButton}>Update</button>
    </div>
  )
}


export default App;