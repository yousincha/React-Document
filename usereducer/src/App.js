// // Reducer는 다음 state를 계산하고 반환
// import { useReducer } from "react";

// function reducer(state, action) {
//   if (action.type === "incremented_age") {
//     return {
//       age: state.age + 1,
//     };
//   }
//   throw Error("Unknown action.");
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
//       <button
//         onClick={() => {
//           dispatch({ type: "incremented_age" });
//         }}
//       >
//         Increment age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }

// // useReducer 기본 예시
// // 예제1. 입력방식 (객체)
// import { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "incremented_age": {
//       return {
//         name: state.name,
//         age: state.age + 1,
//       };
//     }
//     case "changed_name": {
//       return {
//         name: action.nextName,
//         age: state.age,
//       };
//     }
//   }
//   throw Error("Unknown action: " + action.type);
// }

// const initialState = { name: "Taylor", age: 42 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: "incremented_age" });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: "changed_name",
//       nextName: e.target.value,
//     });
//   }

//   return (
//     <>
//       <input value={state.name} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Increment age</button>
//       <p>
//         Hello, {state.name}. You are {state.age}.
//       </p>
//     </>
//   );
// }

// // 예제2. 할일 목록 (배열)
// import { useReducer } from "react";
// import AddTask from "./AddTask.js";
// import TaskList from "./TaskList.js";

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "changed": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];

// // 예제 3. Immer로 간결한 업데이트 로직 작성하기
// import { useImmerReducer } from "use-immer";
// import AddTask from "./AddTask.js";
// import TaskList from "./TaskList.js";

// function tasksReducer(draft, action) {
//   switch (action.type) {
//     case "added": {
//       draft.push({
//         id: action.id,
//         text: action.text,
//         done: false,
//       });
//       break;
//     }
//     case "changed": {
//       const index = draft.findIndex((t) => t.id === action.task.id);
//       draft[index] = action.task;
//       break;
//     }
//     case "deleted": {
//       return draft.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// export default function TaskApp() {
//   const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];

// // 초기화 함수를 전달 VS state를 직접 전달
// // 초기화 함수 전달
// import TodoList from "./TodoList.js";

// export default function App() {
//   return <TodoList username="Taylor" />;
// }

// 초기 state 직접 전달
import TodoList from "./TodoList.js";

export default function App() {
  return <TodoList username="Taylor" />;
}
