// // useMemo와 값을 직접 계산하는 것의 차이점
// // 예제1. useMemo를 사용하여 재계산 건너뛰기
// import { useState } from "react";
// import { createTodos } from "./utils.js";
// import TodoList from "./TodoList.js";

// const todos = createTodos();

// export default function App() {
//   const [tab, setTab] = useState("all");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <button onClick={() => setTab("all")}>All</button>
//       <button onClick={() => setTab("active")}>Active</button>
//       <button onClick={() => setTab("completed")}>Completed</button>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Dark mode
//       </label>
//       <hr />
//       <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

// // 예제2. 항상 값을 재계산하기
// import { useState } from "react";
// import { createTodos } from "./utils.js";
// import TodoList from "./TodoList.js";

// const todos = createTodos();

// export default function App() {
//   const [tab, setTab] = useState("all");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <button onClick={() => setTab("all")}>All</button>
//       <button onClick={() => setTab("active")}>Active</button>
//       <button onClick={() => setTab("completed")}>Completed</button>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Dark mode
//       </label>
//       <hr />
//       <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

// // 리렌더링을 건너뛰는 것 VS 항상 리렌더링 하는 것
// // 예제1. useMemo 와 memo로 리렌더링 건너뛰기

// import { useState } from "react";
// import { createTodos } from "./utils.js";
// import TodoList from "./TodoList.js";

// const todos = createTodos();

// export default function App() {
//   const [tab, setTab] = useState("all");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <button onClick={() => setTab("all")}>All</button>
//       <button onClick={() => setTab("active")}>Active</button>
//       <button onClick={() => setTab("completed")}>Completed</button>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Dark mode
//       </label>
//       <hr />
//       <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

// 예제2. 항상 컴포넌트를 리렌더링하기
import { useState } from "react";
import { createTodos } from "./utils.js";
import TodoList from "./TodoList.js";

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </>
  );
}
