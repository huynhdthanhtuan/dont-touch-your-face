
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


//#region useEffect: preview avatar
// import { useEffect, useState } from "react";

// function Content() {
  
//   const [avatars, setAvatars] = useState([]);

//   const handlePreviewAvatars = (e) => {
//     // Lấy ra đối tượng (giống mảng) chứa các đối tượng file chọn vào
//     const files = e.target.files;

//     // Convert đối tượng đó sang kiểu mảng
//     const avatarsResult = Array.from(files);

//     // setState bằng mảng các URL của từng file tương ứng
//     setAvatars(avatarsResult.map(
//       // tạo ra URL hình ảnh từ đối tượng file hình ảnh đó
//       file => URL.createObjectURL(file)
//     ));
//   }


//   useEffect(() => {
//     return () => {
//       // Lặp qua mảng các URL, thực hiện xóa chúng ra khỏi bộ nhớ tạm của trình duyệt
//       avatars.map(avatarURL => URL.revokeObjectURL(avatarURL));
//     }
//   }, [avatars]);


//   return (
//     <div style={{ marginLeft: 100, marginTop: 50 }}>
//       <input 
//         type="file"
//         multiple
//         onInput={handlePreviewAvatars}
//       />

//       {avatars && (
//         avatars.map((avatar, index) => (
//           <img 
//             src={avatar} 
//             style={{width: 150, height: 150, display: 'block'}} 
//             key={index}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default Content;
//#endregion


import {useState, useEffect} from 'react';

function Content() {

  const [groupId, setGroupId] = useState(1);

  const chatGroups = [
    {
      id: 1,
      name: "Nhóm chat học tập"
    },
    {
      id: 2,
      name: "Nhóm chat bóng đá"
    },
    {
      id: 3,
      name: "Nhóm chat tiếng Anh"
    }
  ];


  const handleFunction = (e) => console.log(e.detail)

  useEffect(() => {
    window.addEventListener(`group-${groupId}`, handleFunction);

    return () => {
      window.removeEventListener(`group-${groupId}`, handleFunction);
    }
  }, [groupId])


  return (
    <div>
      {
        chatGroups.map(chatGroup => (
          <button
            key={chatGroup.id}
            style={
              (groupId === chatGroup.id)  
                ? { 
                  marginLeft: 10,
                  backgroundColor: "#000",
                  color: "#fff"
                }
                : {
                  marginLeft: 10
                }
            }
            onClick={() => setGroupId(chatGroup.id)}
          >
            {chatGroup.name}
          </button>
        ))
      }
    </div>
  )
}

export default Content;
