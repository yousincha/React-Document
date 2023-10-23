// // 도전1. Effect없이 데이터 반환하기
// import { useState } from "react";
// import { initialTodos, createTodo } from "./todos.js";

// export default function TodoList() {
//   const [todos, setTodos] = useState(initialTodos);
//   const [showActive, setShowActive] = useState(false);
//   const activeTodos = todos.filter((todo) => !todo.completed);
//   const visibleTodos = showActive ? activeTodos : todos;

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={showActive}
//           onChange={(e) => setShowActive(e.target.checked)}
//         />
//         Show only active todos
//       </label>
//       <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
//       <ul>
//         {visibleTodos.map((todo) => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//       <footer>{activeTodos.length} todos left</footer>
//     </>
//   );
// }

// function NewTodo({ onAdd }) {
//   const [text, setText] = useState("");

//   function handleAddClick() {
//     setText("");
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAddClick}>Add</button>
//     </>
//   );
// }

// 도전2는 패쓰~

// // 도전3. Effect 없이 state 재설정하기
// import { useState } from "react";
// import ContactList from "./ContactList.js";
// import EditContact from "./EditContact.js";

// export default function ContactManager() {
//   const [contacts, setContacts] = useState(initialContacts);
//   const [selectedId, setSelectedId] = useState(0);
//   const selectedContact = contacts.find((c) => c.id === selectedId);

//   function handleSave(updatedData) {
//     const nextContacts = contacts.map((c) => {
//       if (c.id === updatedData.id) {
//         return updatedData;
//       } else {
//         return c;
//       }
//     });
//     setContacts(nextContacts);
//   }

//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={selectedId}
//         onSelect={(id) => setSelectedId(id)}
//       />
//       <hr />
//       <EditContact savedContact={selectedContact} onSave={handleSave} />
//     </div>
//   );
// }

// const initialContacts = [
//   { id: 0, name: "Taylor", email: "taylor@mail.com" },
//   { id: 1, name: "Alice", email: "alice@mail.com" },
//   { id: 2, name: "Bob", email: "bob@mail.com" },
// ];

// 도전4. Effect 없이 양식 제출하기
import { useState } from "react";

export default function Form() {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for using our services!</h1>
        <button
          onClick={() => {
            setMessage("");
            setShowForm(true);
          }}
        >
          Open chat
        </button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={message === ""}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message) {
  console.log("Sending message: " + message);
}
