// // 텍스트 input에 초점 맞추기
// import { useRef } from 'react';

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// // 명령형 핸들로 API의 하위 집합 노출하기

// import { forwardRef, useRef, useImperativeHandle } from "react";

// const MyInput = forwardRef((props, ref) => {
//   const realInputRef = useRef(null);
//   useImperativeHandle(ref, () => ({
//     // Only expose focus and nothing else
//     focus() {
//       realInputRef.current.focus();
//     },
//   }));
//   return <input {...props} ref={realInputRef} />;
// });

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>Focus the input</button>
//     </>
//   );
// }

// //  element로 스크롤하기
// import { useRef } from "react";

// export default function CatFriends() {
//   const firstCatRef = useRef(null);
//   const secondCatRef = useRef(null);
//   const thirdCatRef = useRef(null);

//   function handleScrollToFirstCat() {
//     firstCatRef.current.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }

//   function handleScrollToSecondCat() {
//     secondCatRef.current.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }

//   function handleScrollToThirdCat() {
//     thirdCatRef.current.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={handleScrollToFirstCat}>Tom</button>
//         <button onClick={handleScrollToSecondCat}>Maru</button>
//         <button onClick={handleScrollToThirdCat}>Jellylorum</button>
//       </nav>
//       <div>
//         <ul>
//           <li>
//             <img
//               src="https://placekitten.com/g/200/200"
//               alt="Tom"
//               ref={firstCatRef}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placekitten.com/g/300/200"
//               alt="Maru"
//               ref={secondCatRef}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placekitten.com/g/250/200"
//               alt="Jellylorum"
//               ref={thirdCatRef}
//             />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// // ref 콜백을 사용하여 refs 목록을 관리하는 방법

// import { useRef } from "react";

// export default function CatFriends() {
//   const itemsRef = useRef(null);

//   function scrollToId(itemId) {
//     const map = getMap();
//     const node = map.get(itemId);
//     node.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }

//   function getMap() {
//     if (!itemsRef.current) {
//       // Initialize the Map on first usage.
//       itemsRef.current = new Map();
//     }
//     return itemsRef.current;
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={() => scrollToId(0)}>Tom</button>
//         <button onClick={() => scrollToId(5)}>Maru</button>
//         <button onClick={() => scrollToId(9)}>Jellylorum</button>
//       </nav>
//       <div>
//         <ul>
//           {catList.map((cat) => (
//             <li
//               key={cat.id}
//               ref={(node) => {
//                 const map = getMap();
//                 if (node) {
//                   map.set(cat.id, node);
//                 } else {
//                   map.delete(cat.id);
//                 }
//               }}
//             >
//               <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: "https://placekitten.com/250/200?image=" + i,
//   });
// }

// //React가 ref를 첨부할 때
// import { useState, useRef } from "react";
// import { flushSync } from "react-dom";

// export default function TodoList() {
//   const listRef = useRef(null);
//   const [text, setText] = useState("");
//   const [todos, setTodos] = useState(initialTodos);

//   function handleAdd() {
//     const newTodo = { id: nextId++, text: text };
//     flushSync(() => {
//       setText("");
//       setTodos([...todos, newTodo]);
//     });
//     listRef.current.lastChild.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//     });
//   }

//   return (
//     <>
//       <button onClick={handleAdd}>Add</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <ul ref={listRef}>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.text}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// let nextId = 0;
// let initialTodos = [];
// for (let i = 0; i < 20; i++) {
//   initialTodos.push({
//     id: nextId++,
//     text: "Todo #" + (i + 1),
//   });
// }

// ref를 이용한 DOM 조작 사례
import { useState, useRef } from "react";

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
