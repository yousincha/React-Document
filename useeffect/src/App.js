// // 외부시스템에 연결하는 예시
// // 예제1. 채팅 서버에 연결하기

// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState("https://localhost:1234");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }, [roomId, serverUrl]);

//   return (
//     <>
//       <label>
//         Server URL:{" "}
//         <input
//           value={serverUrl}
//           onChange={(e) => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
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

// // 예제2. 전역 브라우저 이벤트 수신하기
// import { useState, useEffect } from "react";

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     function handleMove(e) {
//       setPosition({ x: e.clientX, y: e.clientY });
//     }
//     window.addEventListener("pointermove", handleMove);
//     return () => {
//       window.removeEventListener("pointermove", handleMove);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         backgroundColor: "pink",
//         borderRadius: "50%",
//         opacity: 0.6,
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         pointerEvents: "none",
//         left: -20,
//         top: -20,
//         width: 40,
//         height: 40,
//       }}
//     />
//   );
// }

// // 예제3. 애니메이션 촉발하기
// import { useState, useEffect, useRef } from "react";
// import { FadeInAnimation } from "./animation.js";

// function Welcome() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const animation = new FadeInAnimation(ref.current);
//     animation.start(1000);
//     return () => {
//       animation.stop();
//     };
//   }, []);

//   return (
//     <h1
//       ref={ref}
//       style={{
//         opacity: 0,
//         color: "white",
//         padding: 50,
//         textAlign: "center",
//         fontSize: 50,
//         backgroundImage:
//           "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
//       }}
//     >
//       Welcome
//     </h1>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
//       <hr />
//       {show && <Welcome />}
//     </>
//   );
// }

// // 예제4. 모달 제어하기
// import { useState } from "react";
// import ModalDialog from "./ModalDialog.js";

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(true)}>Open dialog</button>
//       <ModalDialog isOpen={show}>
//         Hello there!
//         <br />
//         <button
//           onClick={() => {
//             setShow(false);
//           }}
//         >
//           Close
//         </button>
//       </ModalDialog>
//     </>
//   );
// }

// // 예제5. 엘리먼트의 가시성 추적하기
// import Box from "./Box.js";

// export default function App() {
//   return (
//     <>
//       <LongSection />
//       <Box />
//       <LongSection />
//       <Box />
//       <LongSection />
//     </>
//   );
// }

// function LongSection() {
//   const items = [];
//   for (let i = 0; i < 50; i++) {
//     items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
//   }
//   return <ul>{items}</ul>;
// }

// // Effect를 커스텀 훅으로 감싸는 예시
// // 예제1. 커스텀 useChatRoom 훅
// import { useState } from "react";
// import { useChatRoom } from "./useChatRoom.js";

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState("https://localhost:1234");

//   useChatRoom({
//     roomId: roomId,
//     serverUrl: serverUrl,
//   });

//   return (
//     <>
//       <label>
//         Server URL:{" "}
//         <input
//           value={serverUrl}
//           onChange={(e) => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
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

// // 예제2. 커스텀 useWindowListener 훅
// import { useState } from "react";
// import { useWindowListener } from "./useWindowListener.js";

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useWindowListener("pointermove", (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   });

//   return (
//     <div
//       style={{
//         position: "absolute",
//         backgroundColor: "pink",
//         borderRadius: "50%",
//         opacity: 0.6,
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         pointerEvents: "none",
//         left: -20,
//         top: -20,
//         width: 40,
//         height: 40,
//       }}
//     />
//   );
// }

// // 예제3. 커스텀 useIntersectionObserver 훅

// import Box from "./Box.js";

// export default function App() {
//   return (
//     <>
//       <LongSection />
//       <Box />
//       <LongSection />
//       <Box />
//       <LongSection />
//     </>
//   );
// }

// function LongSection() {
//   const items = [];
//   for (let i = 0; i < 50; i++) {
//     items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
//   }
//   return <ul>{items}</ul>;
// }

// // 리액트가 아닌 위젯 제어하기
// import { useState } from "react";
// import Map from "./Map.js";

// export default function App() {
//   const [zoomLevel, setZoomLevel] = useState(0);
//   return (
//     <>
//       Zoom level: {zoomLevel}x
//       <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
//       <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
//       <hr />
//       <Map zoomLevel={zoomLevel} />
//     </>
//   );
// }

// // Effect로 데이터 페칭하기
// import { useState, useEffect } from "react";
// import { fetchBio } from "./api.js";

// export default function Page() {
//   const [person, setPerson] = useState("Alice");
//   const [bio, setBio] = useState(null);
//   useEffect(() => {
//     let ignore = false;
//     setBio(null);
//     fetchBio(person).then((result) => {
//       if (!ignore) {
//         setBio(result);
//       }
//     });
//     return () => {
//       ignore = true;
//     };
//   }, [person]);

//   return (
//     <>
//       <select
//         value={person}
//         onChange={(e) => {
//           setPerson(e.target.value);
//         }}
//       >
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//         <option value="Taylor">Taylor</option>
//       </select>
//       <hr />
//       <p>
//         <i>{bio ?? "Loading..."}</i>
//       </p>
//     </>
//   );
// }

// // 반응형 의존성 전달 예시
// // 예제1. 의존성 배열 전달하기
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState("https://localhost:1234");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }, [serverUrl, roomId]);

//   return (
//     <>
//       <label>
//         Server URL:{" "}
//         <input
//           value={serverUrl}
//           onChange={(e) => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//       <label>
//         Your message:{" "}
//         <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   const [roomId, setRoomId] = useState("general");
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//         <button onClick={() => setShow(!show)}>
//           {show ? "Close chat" : "Open chat"}
//         </button>
//       </label>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// // 예제2. 빈 의존성 배열 전달하기
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// const serverUrl = "https://localhost:1234";
// const roomId = "music";

// function ChatRoom() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <label>
//         Your message:{" "}
//         <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Close chat" : "Open chat"}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom />}
//     </>
//   );
// }

// // 예제3. 아예 의존성 배열 전달하지 않기
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState("https://localhost:1234");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }); // No dependency array at all

//   return (
//     <>
//       <label>
//         Server URL:{" "}
//         <input
//           value={serverUrl}
//           onChange={(e) => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//       <label>
//         Your message:{" "}
//         <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   const [roomId, setRoomId] = useState("general");
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//         <button onClick={() => setShow(!show)}>
//           {show ? "Close chat" : "Open chat"}
//         </button>
//       </label>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// // Effect의 이전 state를 기반으로 state 업데이트
// import { useState, useEffect } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((c) => c + 1); // ✅ Pass a state updater
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []); // ✅ Now count is not a dependency

//   return <h1>{count}</h1>;
// }

// // 불필요한 객체 의존성 제거하기
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const options = {
//       serverUrl: serverUrl,
//       roomId: roomId,
//     };
//     const connection = createConnection(options);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input value={message} onChange={(e) => setMessage(e.target.value)} />
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
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
//       <hr />
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

// 렌더링 중 생성된 함수를 의존성으로 사용하지 않고 Effect 내에서 선언하기
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    function createOptions() {
      return {
        serverUrl: serverUrl,
        roomId: roomId,
      };
    }

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
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
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
