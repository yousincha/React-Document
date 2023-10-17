// // 서로 영향을 미치지 않는 counter
// import { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = "counter";
//   if (hover) {
//     className += " hover";
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>Add one</button>
//     </div>
//   );
// }

// // 두 번째 컴포넌트 제거
// import { useState } from "react";

// export default function App() {
//   const [showB, setShowB] = useState(true);
//   return (
//     <div>
//       <Counter />
//       {showB && <Counter />}
//       <label>
//         <input
//           type="checkbox"
//           checked={showB}
//           onChange={(e) => {
//             setShowB(e.target.checked);
//           }}
//         />
//         Render the second counter
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = "counter";
//   if (hover) {
//     className += " hover";
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>Add one</button>
//     </div>
//   );
// }

// // 두개의 서로 다른 counter
// import { useState } from "react";

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={(e) => {
//             setIsFancy(e.target.checked);
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = "counter";
//   if (hover) {
//     className += " hover";
//   }
//   if (isFancy) {
//     className += " fancy";
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>Add one</button>
//     </div>
//   );
// }

// // 도전1. 사라지는 입력 텍스트 수정하기
// import { useState } from "react";

// export default function App() {
//   const [showHint, setShowHint] = useState(false);
//   if (showHint) {
//     return (
//       <div>
//         <p>
//           <i>Hint: Your favorite city?</i>
//         </p>
//         <Form />
//         <button
//           onClick={() => {
//             setShowHint(false);
//           }}
//         >
//           Hide hint
//         </button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       {null}
//       <Form />
//       <button
//         onClick={() => {
//           setShowHint(true);
//         }}
//       >
//         Show hint
//       </button>
//     </div>
//   );
// }

// function Form() {
//   const [text, setText] = useState("");
//   return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
// }

// // 도전2. 두 form 필드 교체하기
// import { useState } from "react";

// export default function App() {
//   const [reverse, setReverse] = useState(false);
//   let checkbox = (
//     <label>
//       <input
//         type="checkbox"
//         checked={reverse}
//         onChange={(e) => setReverse(e.target.checked)}
//       />
//       Reverse order
//     </label>
//   );
//   if (reverse) {
//     return (
//       <>
//         <Field key="lastName" label="Last name" />
//         <Field key="firstName" label="First name" />
//         {checkbox}
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Field key="firstName" label="First name" />
//         <br />
//         <Field key="lastName" label="Last name" />
//         {checkbox}
//       </>
//     );
//   }
// }

// function Field({ label }) {
//   const [text, setText] = useState("");
//   return (
//     <label>
//       {label}:{" "}
//       <input
//         type="text"
//         value={text}
//         placeholder={label}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </label>
//   );
// }

// // 도전3. 상세 form 재설정하기
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
//       <EditContact
//         key={selectedId}
//         initialData={selectedContact}
//         onSave={handleSave}
//       />
//     </div>
//   );
// }

// const initialContacts = [
//   { id: 0, name: "Taylor", email: "taylor@mail.com" },
//   { id: 1, name: "Alice", email: "alice@mail.com" },
//   { id: 2, name: "Bob", email: "bob@mail.com" },
// ];

// // 도전4. 이미지 로딩중에 기존 이미지 지우기
// import { useState } from "react";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const hasNext = index < images.length - 1;

//   function handleClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   let image = images[index];
//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h3>
//         Image {index + 1} of {images.length}
//       </h3>
//       <img key={image.src} src={image.src} />
//       <p>{image.place}</p>
//     </>
//   );
// }

// let images = [
//   {
//     place: "Penang, Malaysia",
//     src: "https://i.imgur.com/FJeJR8M.jpg",
//   },
//   {
//     place: "Lisbon, Portugal",
//     src: "https://i.imgur.com/dB2LRbj.jpg",
//   },
//   {
//     place: "Bilbao, Spain",
//     src: "https://i.imgur.com/z08o2TS.jpg",
//   },
//   {
//     place: "Valparaíso, Chile",
//     src: "https://i.imgur.com/Y3utgTi.jpg",
//   },
//   {
//     place: "Schwyz, Switzerland",
//     src: "https://i.imgur.com/JBbMpWY.jpg",
//   },
//   {
//     place: "Prague, Czechia",
//     src: "https://i.imgur.com/QwUKKmF.jpg",
//   },
//   {
//     place: "Ljubljana, Slovenia",
//     src: "https://i.imgur.com/3aIiwfm.jpg",
//   },
// ];

// 도전5. 목록에서 잘못 배치된 state 수정하기
import { useState } from "react";
import Contact from "./Contact.js";

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];
