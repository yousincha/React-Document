// //useState 기본 예시

// // 예제 1. 카운터 숫자

// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>You pressed me {count} times</button>;
// }

// // 예제 2. 텍스트 필드 (문자열)

// import { useState } from "react";

// export default function MyInput() {
//   const [text, setText] = useState("hello");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={text} onChange={handleChange} />
//       <p>You typed: {text}</p>
//       <button onClick={() => setText("hello")}>Reset</button>
//     </>
//   );
// }

// // 예제3. 체크박스 (불리언)
// import { useState } from "react";

// export default function MyCheckbox() {
//   const [liked, setLiked] = useState(true);

//   function handleChange(e) {
//     setLiked(e.target.checked);
//   }

//   return (
//     <>
//       <label>
//         <input type="checkbox" checked={liked} onChange={handleChange} />I liked
//         this
//       </label>
//       <p>You {liked ? "liked" : "did not like"} this.</p>
//     </>
//   );
// }

// // 예제 4. 폼 (두 개의 변수)

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("Taylor");
//   const [age, setAge] = useState(42);

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={() => setAge(age + 1)}>Increment age</button>
//       <p>
//         Hello, {name}. You are {age}.
//       </p>
//     </>
//   );
// }

// // 업데이터를 전달 VS state를 직접 전달
// // 업데이터 함수 전달하기
// import { useState } from "react";

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge((a) => a + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button
//         onClick={() => {
//           increment();
//           increment();
//           increment();
//         }}
//       >
//         +3
//       </button>
//       <button
//         onClick={() => {
//           increment();
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// }

// // 다음 state 바로 전달하기
// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(age + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }

// // 객체 및 배열 state 예시
// // 예제 1. Form (객체)
// import { useState } from "react";

// export default function Form() {
//   const [form, setForm] = useState({
//     firstName: "Barbara",
//     lastName: "Hepworth",
//     email: "bhepworth@sculpture.com",
//   });

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={form.firstName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               firstName: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={form.lastName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               lastName: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={form.email}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               email: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <p>
//         {form.firstName} {form.lastName} ({form.email})
//       </p>
//     </>
//   );
// }

// // 예제 2. Form (중첩 객체)
// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }

// // 예제 3. List(배열)
// import { useState } from "react";
// import AddTodo from "./AddTodo.js";
// import TaskList from "./TaskList.js";

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: "Buy milk", done: true },
//   { id: 1, title: "Eat tacos", done: false },
//   { id: 2, title: "Brew tea", done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(initialTodos);

//   function handleAddTodo(title) {
//     setTodos([
//       ...todos,
//       {
//         id: nextId++,
//         title: title,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTodo(nextTodo) {
//     setTodos(
//       todos.map((t) => {
//         if (t.id === nextTodo.id) {
//           return nextTodo;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTodo(todoId) {
//     setTodos(todos.filter((t) => t.id !== todoId));
//   }

//   return (
//     <>
//       <AddTodo onAddTodo={handleAddTodo} />
//       <TaskList
//         todos={todos}
//         onChangeTodo={handleChangeTodo}
//         onDeleteTodo={handleDeleteTodo}
//       />
//     </>
//   );
// }

// // 예제 4. Immer로 간결한 업데이트 로직 작성
// import { useState } from "react";
// import { useImmer } from "use-immer";

// let nextId = 3;
// const initialList = [
//   { id: 0, title: "Big Bellies", seen: false },
//   { id: 1, title: "Lunar Landscape", seen: false },
//   { id: 2, title: "Terracotta Army", seen: true },
// ];

// export default function BucketList() {
//   const [list, updateList] = useImmer(initialList);

//   function handleToggle(artworkId, nextSeen) {
//     updateList((draft) => {
//       const artwork = draft.find((a) => a.id === artworkId);
//       artwork.seen = nextSeen;
//     });
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList artworks={list} onToggle={handleToggle} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map((artwork) => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={(e) => {
//                 onToggle(artwork.id, e.target.checked);
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// // 초기화 함수를 전달 VS 초기 state를 직접 전달
// // 예제 1. 초기화 함수 전달
// import { useState } from "react";

// function createInitialTodos() {
//   const initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: "Item " + (i + 1),
//     });
//   }
//   return initialTodos;
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState(createInitialTodos);
//   const [text, setText] = useState("");

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button
//         onClick={() => {
//           setText("");
//           setTodos([
//             {
//               id: todos.length,
//               text: text,
//             },
//             ...todos,
//           ]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // 예제 2. 초기 state 직접 전달하기

// import { useState } from "react";

// function createInitialTodos() {
//   const initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: "Item " + (i + 1),
//     });
//   }
//   return initialTodos;
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState(createInitialTodos());
//   const [text, setText] = useState("");

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button
//         onClick={() => {
//           setText("");
//           setTodos([
//             {
//               id: todos.length,
//               text: text,
//             },
//             ...todos,
//           ]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // key로 state 재설정하기
// import { useState } from "react";

// export default function App() {
//   const [version, setVersion] = useState(0);

//   function handleReset() {
//     setVersion(version + 1);
//   }

//   return (
//     <>
//       <button onClick={handleReset}>Reset</button>
//       <Form key={version} />
//     </>
//   );
// }

// function Form() {
//   const [name, setName] = useState("Taylor");

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <p>Hello, {name}.</p>
//     </>
//   );
// }

// 이전 렌더링에서 얻은 정보 저장하기
import { useState } from "react";
import CountLabel from "./CountLabel.js";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </>
  );
}
