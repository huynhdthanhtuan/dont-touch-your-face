
//#region useEffect: DOM events, cleanup function
// import { useEffect, useState } from "react";

// function Content() {

//   const typeList = ["posts", "comments", "albums", "photos", "todos", "users"];

//   // Khi setState truyền vào giá trị giống với lần setState trước thì component sẽ không re-render
//   const [type, setType] = useState(typeList[0]);
//   const [infos, setInfos] = useState([]);
//   const [showGoToTop, setShowGoToTop] = useState(false);
//   const [widthSize, setWidthSize] = useState(window.innerWidth);


//   useEffect(() => {

//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((respone) => respone.json())
//       .then((datas) => setInfos(datas));

//   }, [type]);


//   useEffect(() => {
//     const handleScroll = () => {
//       setShowGoToTop(window.scrollY >= 400);
//     }
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       // cleanup function: thực thi trước khi component unmouted
//       window.removeEventListener("scroll", handleScroll);
//     }
//   }, [showGoToTop]);


//   useEffect(() => {
//     const handleResize = () => {
//       setWidthSize(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     }
//   }, [])


//   return (
//     <div style={{ marginLeft: 100, marginTop: 50 }}>

//       <h2>Width: {widthSize}</h2>

//       <div>
//         {typeList.map((typeItem) => {
//           return (
//             <button
//               key={typeItem}
//               onClick={() => setType(typeItem)}
//               style={
//                 typeItem === type
//                   ? {
//                       color: "#fff",
//                       backgroundColor: "#000",
//                       padding: "5px 10px"
//                     }
//                   : { padding: "5px 10px" }
//               }
//             >
//               {typeItem}
//             </button>
//           );
//         })}
//       </div>

//       <ul>
//         {infos.map((info) => {
//           return <li key={info.id}>{info.title || info.name}</li>;
//         })}
//       </ul>

//       {showGoToTop && (
//        <button
//         style = {{
//           position: "fixed",
//           right: 20,
//           bottom: 20
//         }}
//         onClick={() => window.scrollTo(0,0)}
//        >
//          Go to top
//        </button>
//       )}
//     </div>
//   );
// }

// export default Content;

//#endregion

//#region useEffect: timer function (create, clear)
// import { useState } from 'react';

// function Content() {  

//   const [timerIds, setTimerIds] = useState([]);

//   const create = () => {
//     let id = setInterval(() => console.log('call...'), 2000);
//     console.log('create', id);
//     setTimerIds(prev => [...prev, id]);
//   }

//   const remove = () => {
//     console.log('remove', timerIds);
//     timerIds.forEach(timerId => clearInterval(timerId));
//     setTimerIds([]);
//   }

//   return (
//     <div>
//       <button
//         onClick={create}
//       >
//         ON
//       </button>
//       <button
//         onClick={remove}
//       >
//         OFF
//       </button>
//     </div>
//   )
// }

// export default Content;
//#endregion

//#region useEffect: preview avatar
// import { useEffect, useState } from "react";

// function Content() {
//   const [avatars, setAvatars] = useState([]);

//   const handlePreviewAvatars = (e) => {
//     // Lấy ra đối tượng (giống mảng) chứa các đối tượng file
//     const files = e.target.files;

//     // Convert đối tượng đó sang kiểu mảng, lặp qua và nhận về mảng các URL của từng file tương ứng
//     const avatarsResult = Array.from(files).map((file) =>
//       URL.createObjectURL(file)
//     );

//     // setState mảng vừa nhận được cho avatars
//     setAvatars(avatarsResult);
//   };

//   useEffect(() => {
//     // cleanup function
//     return () => {
//       // Lặp qua mảng các URL, thực hiện xóa chúng ra khỏi bộ nhớ tạm của trình duyệt
//       avatars.map((avatarURL) => URL.revokeObjectURL(avatarURL));
//     };
//   }, [avatars]);

//   return (
//     <div style={{ marginLeft: 100, marginTop: 50 }}>
//       <input type="file" multiple onInput={handlePreviewAvatars} />

//       {avatars &&
//         avatars.map((avatar, index) => (
//           <img
//             src={avatar}
//             style={{ width: 150, height: 150, display: "block" }}
//             key={index}
//           />
//         ))}
//     </div>
//   );
// }

// export default Content;
//#endregion

//#region useEffect: chat App
// import {useState, useEffect} from 'react';

// function Content() {

//   const [groupId, setGroupId] = useState(1);

//   const chatGroups = [
//     {
//       id: 1,
//       name: "Nhóm chat học tập"
//     },
//     {
//       id: 2,
//       name: "Nhóm chat bóng đá"
//     },
//     {
//       id: 3,
//       name: "Nhóm chat tiếng Anh"
//     }
//   ];


//   const handleComment = (e) => console.log(e.detail)

//   useEffect(() => {
//     window.addEventListener(`group-${groupId}`, handleComment);

//     return () => {
//       console.log(123);
//       window.removeEventListener(`group-${groupId}`, handleComment);
//     }
//   }, [groupId])


//   return (
//     <div>
//       {
//         chatGroups.map(chatGroup => (
//           <button
//             key={chatGroup.id}
//             style={
//               (groupId === chatGroup.id)  
//                 ? { 
//                   marginLeft: 10,
//                   backgroundColor: "#000",
//                   color: "#fff"
//                 }
//                 : {
//                   marginLeft: 10
//                 }
//             }
//             onClick={() => setGroupId(chatGroup.id)}
//           >
//             {chatGroup.name}
//           </button>
//         ))
//       }
//     </div>
//   )
// }

// export default Content;

/*  Trong file index.js cùng cấp 
function makeComment (id, detail) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`group-${id}`, {
        detail: detail
      })
    )
  }, 1500)
}

makeComment(1, "Nhóm chat học tập");
makeComment(2, "Nhóm chat bóng đá");
makeComment(3, "Nhóm chat tiếng Anh");
*/

//#endregion

//#region useRef: 
// -> Lưu trữ giá trị trước đó bằng 1 tham chiếu đưa ra bên ngoài Component
// import { useState, useRef } from 'react';

// function Content() {
//     const [count, setCount] = useState(0);
//     const countRef1 = useRef();
//     const countRef2 = useRef();

//     return (
//         <>
//             <button
//                 onClick={() => {
//                     // lưu lại giá trị count lần trước đó
//                     countRef1.current = count;

//                     setCount(count + 1)
//                 }}
//                 // gán biến countRef2 cho prog ref của thẻ button
//                 // -> countRef2.curent sẽ là DOM event của button
//                 ref={countRef2}
//             >
//                 Curr: {count} - 
//                 Prev: {countRef1.current}
//             </button>

//             {console.log('DOM event button:', countRef2.current)}
//         </>
//     )
// }

// export default Content;
//#endregion

//#region React.memo
// + Là 1 Higher Order Component (HOC): Component bậc cao
// + Nó "ghi nhớ" lại progs của Component
// + So sánh nếu progs cũ và progs hiện tại giống nhau thì sẽ ko re-render Component được memo

// import React from 'react';
// import ContentChild from './ContentChild';

// function Content() {  

//   const [id, setId] = React.useState();
//   const [value, setValue] = React.useState(1);

//   console.log('re-render Content');
//   console.log('current value: ', value);

//   return (
//     <div>
//       <ContentChild id={id}/>
//       <button
//         onClick={() => {
//           if (value % 2 == 0) {
//             setId(value * 2);
//           }
//           setValue(prev => prev + 1);
//         }}
//       >
//         CHANGE
//       </button>
//     </div>
//   )
// }

// export default Content;
//#endregion

//#region useCallback: 
// // Tránh tạo ra hàm mới không cần thiết
// // Tránh Component re-render do tạo ra hàm mới không cần thiết

// import { useState, useCallback } from 'react';
// import ContentChild from './ContentChild';

// function Content () {
//     const [count, setCount] = useState(0);

//     const handleIncrease = useCallback(() => {
//         setCount(prev => prev + 1);
//     }, []);

//     return (
//         <div>
//             <h1> Value: {count} </h1>
//             <ContentChild 
//                 onIncrease={handleIncrease}
//             />
//         </div>
//     )
// }

// export default Content;


/*  File ContentChild cùng cấp 

import React from 'react';

function ContentChild ({ onIncrease }) {
    console.log('re-render ContentChild');

    return (
        <button onClick={onIncrease}>
            Count
        </button>
    );
}

export default React.memo(ContentChild);    */

//#endregion

//#region useMemo
// useRef: lưu trữ giá trị trước đó của 1 biến bằng 1 tham chiếu đưa ra bên ngoài Component
// useMemo: tránh chạy lại những logic không cần thiết
// import { useState, useRef, useMemo } from 'react';

// function Content () {
//     const [products, setProducts] = useState([]);
//     const nameRef = useRef();
//     const priceRef = useRef();

//     const handleAddProduct = (nameInputValue, priceInputValue) => {
//         // string.trim(): loại bỏ tất cả khoảng trắng ở đầu và cuối chuỗi

//         if (nameInputValue.trim() !== '' 
//             && priceInputValue.trim() !== ''
//             && Number(priceInputValue.trim()) > 0) {

//             // add product
//             setProducts([...products, {
//                 name: nameInputValue.trim(),
//                 price: Number(priceInputValue.trim())
//             }]);

//             // clean inputs
//             nameRef.current.value = '';
//             priceRef.current.value = '';

//             // auto focus
//             nameRef.current.focus();
//         }
//     }

//     const totalPrice = useMemo(() => {
//         return products.reduce((acc, product) => acc + product.price, 0);
//     }, [products])


//     return (
//         <div>
//             <input ref={nameRef} id="name" placeholder="Name" style={{display: "block"}} />
//             <input ref={priceRef} id="price" placeholder="Price" style={{display: "block"}} />
//             <button
//                 onClick={() => handleAddProduct(nameRef.current.value, priceRef.current.value)}
//             >
//                 ADD
//             </button>
//             <div>Total: {totalPrice}</div>

//             {products && (
//                 <ul>
//                     {products.map((product, index) => (
//                         <li key={index}>
//                             {product.name} - {product.price}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     )
// }

// export default Content;
//#endregion

//#region useReducer
// Hoạt động và ứng dụng như useState
// Xử lí những state có KDL phức tạp, Component có nhiều state phụ thuộc nhau

/* useSate */
// 1. Initial state
// 2. Actions

/* useReducer */
// 1. Initial state
// 2. Actions
// 3. Reducer
// 4. Dispatch

//#region Counting app
// import { useReducer } from 'react';

// // 1. Initial state
// const initialCount = 0;

// // 2. Actions
// const UP_ACTION = 'UP';
// const DOWN_ACTION = 'DOWN';
// const REFRESH_ACTION = 'REFRESH';

// // 3. Reducer
// const reducer = (state, action) => {
//     switch(action) {
//         case UP_ACTION: 
//             return (state + 1);
//         case DOWN_ACTION: 
//             return (state - 1);
//         case REFRESH_ACTION:
//             return initialCount;
//         default:
//             throw new Error('Invalid action!');
//     }
// }

// function Content () {
//     const [count, dispatch] = useReducer(reducer, initialCount);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch(DOWN_ACTION)}>
//                 DOWN
//             </button>
//             <button onClick={() => dispatch(UP_ACTION)}>
//                 UP
//             </button>
//             <button onClick={() => dispatch(REFRESH_ACTION)}>
//                 REFRESH
//             </button>
//         </div>
//     )
// }

// export default Content;
//#endregion

// //#region Todo app (specific implementation)
// import { useReducer, useRef } from "react";

// // 1. Init state
// const initState = {
//     job: '',
//     jobs: []
// }

// // 2. Actions
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (payload) => ({
//     type: SET_JOB,
//     payload: payload
// })

// const addJob = (payload) => ({
//     type: ADD_JOB,
//     payload: payload
// })

// const deleteJob = (payload) => ({
//     type: DELETE_JOB,
//     payload: payload
// })

// // 3. Reducer
// const reducer = (state, action) => {
//     switch (action.type) {
//         case SET_JOB: {
//             return {
//                 ...state,
//                 job: action.payload
//             }
//         }
//         case ADD_JOB: {
//             return {
//                 ...state,
//                 jobs: [...state.jobs, action.payload]
//             }
//         }
//         case DELETE_JOB: {
//             let newJobs = [...state.jobs];
//             newJobs.splice(action.payload, 1);

//             return {
//                 ...state,
//                 jobs: newJobs
//             }
//         }
//         default:
//             throw new Error("Invalid action");
//     }
// }

// function Content () {
//     const [state, dispatch] = useReducer(reducer, initState);
//     const { job, jobs } = state;
//     const inputRef = useRef();

//     const handleAddJob = (job) => {
//         if (job.trim() !== '') {
//             // add job
//             dispatch(addJob(job));

//             // cleanup input
//             dispatch(setJob(""));

//             // auto focus after add
//             inputRef.current.focus();
//         }
//     }

//     return (
//         <div>
//             <input 
//                 ref={inputRef}
//                 value={job}
//                 placeholder="Job"
//                 onChange={(e) => dispatch(setJob(e.target.value))}
//             />
//             <button onClick={() => handleAddJob(job)}>
//                 ADD
//             </button>

//             {jobs.map((job, index) => (
//                 <li key={index}>
//                     {job}
//                     <span 
//                         onClick={() => dispatch(deleteJob(index))}
//                         style={{ cursor: 'default' }}
//                     >
//                         &times;
//                     </span>
//                 </li>
//             ))}
//         </div>
//     )
// }

// export default Content;
// //#endregion

//#region Todo app (modularization)
// import TodoApp from "./TodoApp/index";

// function Content () {
//     return <TodoApp />;
// }

// export default Content;
//#endregion

//#endregion

//#region useContext hook
// -> Giúp truyền dữ liệu từ component cha xuống các component cấp con 1 cách dễ dàng

// 1. Create Context
// 2. Provider
// 3. Comsumer
//#endregion

//#region Context + useContext + useReducer hook
// import { useContext, useRef, useState } from "react";
// import { StoreContext } from "./store";
// import { actions } from "./state";

// function Content() {
//   const [state, dispatch] = useContext(StoreContext);
//   const { job, jobs, jobInUpdateInput } = state;
//   const inputRef = useRef();
//   const [updateIndex, setUpdateIndex] = useState();

//   const handleAddJob = (newJob) => {
//     if (newJob.trim().length > 0) {
//       dispatch(actions.addJob(newJob));
//       // cleanup input
//       dispatch(actions.setJob(""));
//       // autofocus after add
//       inputRef.current.focus();

//       // khi addJob xong thì hiện tại sẽ không thể có job nào 
//       // đang được update nên set lại updateIndex = -1 (index ko hợp lệ)
//       setUpdateIndex(-1);
//     }
//   }
//   const handleUpdateJob = ({index, newJob}) => {
//     if (newJob.trim().length > 0) {
//       dispatch(actions.updateJob({index, newJob}));

//       // khi updateJob xong thì hiện tại sẽ không thể có job nào 
//       // đang được update nữa nên set lại updateIndex = -1 (index ko hợp lệ)
//       setUpdateIndex(-1);
//     }
//   }
//   const handleDeleteJob = (index) => {
//     dispatch(actions.deleteJob(index));
    
//     // khi deleteJob xong thì hiện tại sẽ không thể có job nào 
//     // đang được update nên set lại updateIndex = -1 (index ko hợp lệ)
//     setUpdateIndex(-1);
//   }

//   return (
//     <div>
//       <input 
//         value={job}
//         ref={inputRef}
//         autoFocus={true}
//         placeholder="Enter job..."
//         onChange={(e) => dispatch(actions.setJob(e.target.value))}
//         onClick={() => {
//           // Nếu có 1 job đang được update thì sẽ ẩn
//           // thẻ update input và button SAVE của job đó đi
//           if (updateIndex !== -1) {
//             setUpdateIndex(-1);
//           }
//         }}
//       />

//       <button
//         onClick={() => {
//           // Nếu có 1 job đang được update thì sẽ ẩn
//           // thẻ update input và button SAVE của job đó đi
//           if (updateIndex !== -1) {
//             setUpdateIndex(-1);
//           }
//           handleAddJob(job);
//         }}
//       >
//         ADD
//       </button>

//       {jobs.map((job, index) => (
//         <li key={index} style={{ margin: 10 }}>

//           <span style={{ marginRight: 10 }}>
//             {job}
//           </span>
//           <button onClick={() => {
//             // Nếu click button UPDATE trên job đang được update thì sẽ ko được
//             // Đồng thời ẩn thẻ update input và button SAVE đó đi
//             if (updateIndex === index) {
//               setUpdateIndex(-1);
//             } else {
//               setUpdateIndex(index);
//             }
//           }}>
//             UPDATE
//           </button>
//           <button onClick={() => handleDeleteJob(index)}>
//             DELETE
//           </button>

//           {/* Nếu click button UPDATE trên job hiện tại, thì sẽ có thêm thẻ update input và button SAVE */}
//           {(updateIndex === index) && (
//             <div>
//               <input 
//                 id="updateInput"
//                 value={jobInUpdateInput}
//                 autoFocus={true}
//                 onChange={(e) => dispatch(actions.setJobInUpdateInput(e.target.value))}
//               />
//               <button onClick={() => {
//                 const newJob = document.querySelector("#updateInput").value;
//                 handleUpdateJob({index, newJob});
//               }}>
//                 SAVE
//               </button>
//             </div>
//           )}
//         </li>
//       ))}
//     </div>
//   )
// }

// export default Content;


/* File index.js cùng cấp 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
  , 
  document.getElementById('root')
)
*/
//#endregion

//#region

//#endregion
