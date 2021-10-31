
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

//#endregion
