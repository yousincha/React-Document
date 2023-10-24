// // 사용자가 수행한 상호작용과 무관한, 항상 선택된 서버에 대한 활성화된 연결

// import { useState, useEffect } from "react";
// import { createConnection, sendMessage } from "./chat.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   function handleSendClick() {
//     sendMessage(message);
//   }

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button onClick={handleSendClick}>Send</button>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Close chat" : "Open chat"}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// // Effect에서 비반응형 로직 추출하기
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";
// import { showNotification } from "./notifications.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId, theme }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.on("connected", () => {
//       showNotification("Connected!", theme);
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, theme]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Use dark theme
//       </label>
//       <hr />
//       <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

// //  React의 공식 API로 포함되어 있지 않기 때문에 "Uncaught TypeError" 오류가 발생
// import { useState, useEffect } from "react";
// import { experimental_useEffectEvent as useEffectEvent } from "react";
// import { createConnection, sendMessage } from "./chat.js";
// import { showNotification } from "./notifications.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId, theme }) {
//   const onConnected = useEffectEvent(() => {
//     showNotification("Connected!", theme);
//   });

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.on("connected", () => {
//       onConnected();
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Use dark theme
//       </label>
//       <hr />
//       <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

// // 의존성 린터를 억제 - 에러 발생
// import { useState, useEffect } from "react";
// import { experimental_useEffectEvent as useEffectEvent } from "react";

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [canMove, setCanMove] = useState(true);

//   const onMove = useEffectEvent((e) => {
//     if (canMove) {
//       setPosition({ x: e.clientX, y: e.clientY });
//     }
//   });

//   useEffect(() => {
//     window.addEventListener("pointermove", onMove);
//     return () => window.removeEventListener("pointermove", onMove);
//   }, []);

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={canMove}
//           onChange={(e) => setCanMove(e.target.checked)}
//         />
//         The dot is allowed to move
//       </label>
//       <hr />
//       <div
//         style={{
//           position: "absolute",
//           backgroundColor: "pink",
//           borderRadius: "50%",
//           opacity: 0.6,
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           pointerEvents: "none",
//           left: -20,
//           top: -20,
//           width: 40,
//           height: 40,
//         }}
//       />
//     </>
//   );
// }

// // 도전1. 업데이트 되지 않는 변수 수정
// import { useState, useEffect } from "react";

// export default function Timer() {
//   const [count, setCount] = useState(0);
//   const [increment, setIncrement] = useState(1);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + increment);
//     }, 1000);
//     return () => {
//       clearInterval(id);
//     };
//   }, [increment]);

//   return (
//     <>
//       <h1>
//         Counter: {count}
//         <button onClick={() => setCount(0)}>Reset</button>
//       </h1>
//       <hr />
//       <p>
//         Every second, increment by:
//         <button
//           disabled={increment === 0}
//           onClick={() => {
//             setIncrement((i) => i - 1);
//           }}
//         >
//           –
//         </button>
//         <b>{increment}</b>
//         <button
//           onClick={() => {
//             setIncrement((i) => i + 1);
//           }}
//         >
//           +
//         </button>
//       </p>
//     </>
//   );
// }

// // 도전2. 정지된 카운터 수정
// import { useState, useEffect } from "react";
// import { experimental_useEffectEvent as useEffectEvent } from "react";

// export default function Timer() {
//   const [count, setCount] = useState(0);
//   const [increment, setIncrement] = useState(1);

//   const onTick = useEffectEvent(() => {
//     setCount((c) => c + increment);
//   });

//   useEffect(() => {
//     const id = setInterval(() => {
//       onTick();
//     }, 1000);
//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   return (
//     <>
//       <h1>
//         Counter: {count}
//         <button onClick={() => setCount(0)}>Reset</button>
//       </h1>
//       <hr />
//       <p>
//         Every second, increment by:
//         <button
//           disabled={increment === 0}
//           onClick={() => {
//             setIncrement((i) => i - 1);
//           }}
//         >
//           –
//         </button>
//         <b>{increment}</b>
//         <button
//           onClick={() => {
//             setIncrement((i) => i + 1);
//           }}
//         >
//           +
//         </button>
//       </p>
//     </>
//   );
// }

// // 도전3. 조정할 수 없는 딜레이 수정
// import { useState, useEffect } from "react";
// import { experimental_useEffectEvent as useEffectEvent } from "react";

// export default function Timer() {
//   const [count, setCount] = useState(0);
//   const [increment, setIncrement] = useState(1);
//   const [delay, setDelay] = useState(100);

//   const onTick = useEffectEvent(() => {
//     setCount((c) => c + increment);
//   });

//   useEffect(() => {
//     const id = setInterval(() => {
//       onTick();
//     }, delay);
//     return () => {
//       clearInterval(id);
//     };
//   }, [delay]);

//   return (
//     <>
//       <h1>
//         Counter: {count}
//         <button onClick={() => setCount(0)}>Reset</button>
//       </h1>
//       <hr />
//       <p>
//         Increment by:
//         <button
//           disabled={increment === 0}
//           onClick={() => {
//             setIncrement((i) => i - 1);
//           }}
//         >
//           –
//         </button>
//         <b>{increment}</b>
//         <button
//           onClick={() => {
//             setIncrement((i) => i + 1);
//           }}
//         >
//           +
//         </button>
//       </p>
//       <p>
//         Increment delay:
//         <button
//           disabled={delay === 100}
//           onClick={() => {
//             setDelay((d) => d - 100);
//           }}
//         >
//           –100 ms
//         </button>
//         <b>{delay} ms</b>
//         <button
//           onClick={() => {
//             setDelay((d) => d + 100);
//           }}
//         >
//           +100 ms
//         </button>
//       </p>
//     </>
//   );
// }

// 도전4. delay된 알림 수정
import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { createConnection, sendMessage } from "./chat.js";
import { showNotification } from "./notifications.js";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent((connectedRoomId) => {
    showNotification("Welcome to " + connectedRoomId, theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      setTimeout(() => {
        onConnected(roomId);
      }, 2000);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
    </>
  );
}
