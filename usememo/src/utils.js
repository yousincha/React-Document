// useMemo와 값을 직접 계산하는 것의 차이점
// 예제1.
// export function createTodos() {
//   const todos = [];
//   for (let i = 0; i < 50; i++) {
//     todos.push({
//       id: i,
//       text: "Todo " + (i + 1),
//       completed: Math.random() > 0.5,
//     });
//   }
//   return todos;
// }

// export function filterTodos(todos, tab) {
//   console.log(
//     "[ARTIFICIALLY SLOW] Filtering " +
//       todos.length +
//       ' todos for "' +
//       tab +
//       '" tab.'
//   );
//   let startTime = performance.now();
//   while (performance.now() - startTime < 500) {
//     // Do nothing for 500 ms to emulate extremely slow code
//   }

//   return todos.filter((todo) => {
//     if (tab === "all") {
//       return true;
//     } else if (tab === "active") {
//       return !todo.completed;
//     } else if (tab === "completed") {
//       return todo.completed;
//     }
//   });
//}

// // 예제2.
// export function createTodos() {
//   const todos = [];
//   for (let i = 0; i < 50; i++) {
//     todos.push({
//       id: i,
//       text: "Todo " + (i + 1),
//       completed: Math.random() > 0.5,
//     });
//   }
//   return todos;
// }

// export function filterTodos(todos, tab) {
//   console.log("Filtering " + todos.length + ' todos for "' + tab + '" tab.');

//   return todos.filter((todo) => {
//     if (tab === "all") {
//       return true;
//     } else if (tab === "active") {
//       return !todo.completed;
//     } else if (tab === "completed") {
//       return todo.completed;
//     }
//   });
// }

// // 리렌더링을 건너뛰는 것 VS 항상 리렌더링 하는 것
// // 예제1.
// export function createTodos() {
//   const todos = [];
//   for (let i = 0; i < 50; i++) {
//     todos.push({
//       id: i,
//       text: "Todo " + (i + 1),
//       completed: Math.random() > 0.5,
//     });
//   }
//   return todos;
// }

// export function filterTodos(todos, tab) {
//   return todos.filter((todo) => {
//     if (tab === "all") {
//       return true;
//     } else if (tab === "active") {
//       return !todo.completed;
//     } else if (tab === "completed") {
//       return todo.completed;
//     }
//   });
// }

// 예제2.
export function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(todos, tab) {
  return todos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
