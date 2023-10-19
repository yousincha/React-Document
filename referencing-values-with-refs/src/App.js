// // 컴포넌트에 ref 추가하기

// import { useRef } from "react";

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!");
//   }

//   return <button onClick={handleClick}>Click me!</button>;
// }

// // 스톱워치 사용하기

// import { useState, useRef } from "react";

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }

// // 도전1. 잘못된 chat input 고치기
// import { useState, useRef } from "react";

// export default function Chat() {
//   const [text, setText] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const timeoutRef = useRef(null);

//   function handleSend() {
//     setIsSending(true);
//     timeoutRef.current = setTimeout(() => {
//       alert("Sent!");
//       setIsSending(false);
//     }, 3000);
//   }

//   function handleUndo() {
//     setIsSending(false);
//     clearTimeout(timeoutRef.current);
//   }

//   return (
//     <>
//       <input
//         disabled={isSending}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button disabled={isSending} onClick={handleSend}>
//         {isSending ? "Sending..." : "Send"}
//       </button>
//       {isSending && <button onClick={handleUndo}>Undo</button>}
//     </>
//   );
// }

// //도전2. 리렌더링되지 않는 문제 해결하기
// import { useState } from "react";

// export default function Toggle() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <button
//       onClick={() => {
//         setIsOn(!isOn);
//       }}
//     >
//       {isOn ? "On" : "Off"}
//     </button>
//   );
// }

// // 도전3. 디바운싱 수정하기
// import { useRef } from "react";

// function DebouncedButton({ onClick, children }) {
//   const timeoutRef = useRef(null);
//   return (
//     <button
//       onClick={() => {
//         clearTimeout(timeoutRef.current);
//         timeoutRef.current = setTimeout(() => {
//           onClick();
//         }, 1000);
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Dashboard() {
//   return (
//     <>
//       <DebouncedButton onClick={() => alert("Spaceship launched!")}>
//         Launch the spaceship
//       </DebouncedButton>
//       <DebouncedButton onClick={() => alert("Soup boiled!")}>
//         Boil the soup
//       </DebouncedButton>
//       <DebouncedButton onClick={() => alert("Lullaby sung!")}>
//         Sing a lullaby
//       </DebouncedButton>
//     </>
//   );
// }

// 도전4. 최신 state 읽기

import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
