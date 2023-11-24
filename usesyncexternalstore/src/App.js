// // 외부 스토어 구독하기
// import { useSyncExternalStore } from "react";
// import { todosStore } from "./todoStore.js";

// export default function TodosApp() {
//   const todos = useSyncExternalStore(
//     todosStore.subscribe,
//     todosStore.getSnapshot
//   );
//   return (
//     <>
//       <button onClick={() => todosStore.addTodo()}>Add todo</button>
//       <hr />
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.text}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// 브라우저 API 구독하기
import { useOnlineStatus } from "./useOnlineStatus.js";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
