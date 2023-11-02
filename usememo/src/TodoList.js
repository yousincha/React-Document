// useMemo와 값을 직접 계산하는 것의 차이점
// 예제1
//  import { useMemo } from "react";
// import { filterTodos } from "./utils.js";

// export default function TodoList({ todos, theme, tab }) {
//   const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
//   return (
//     <div className={theme}>
//       <p>
//         <b>
//           Note: <code>filterTodos</code> is artificially slowed down!
//         </b>
//       </p>
//       <ul>
//         {visibleTodos.map((todo) => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 예제2
// import { filterTodos } from "./utils.js";

// export default function TodoList({ todos, theme, tab }) {
//   const visibleTodos = filterTodos(todos, tab);
//   return (
//     <div className={theme}>
//       <ul>
//         {visibleTodos.map((todo) => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 리렌더링을 건너뛰는 것 VS 항상 리렌더링 하는 것
// // 예제1.
// import { useMemo } from "react";
// import List from "./List.js";
// import { filterTodos } from "./utils.js";

// export default function TodoList({ todos, theme, tab }) {
//   const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
//   return (
//     <div className={theme}>
//       <p>
//         <b>
//           Note: <code>List</code> is artificially slowed down!
//         </b>
//       </p>
//       <List items={visibleTodos} />
//     </div>
//   );
// }

// 예제2.
import List from "./List.js";
import { filterTodos } from "./utils.js";

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = filterTodos(todos, tab);
  return (
    <div className={theme}>
      <List items={visibleTodos} />
    </div>
  );
}
