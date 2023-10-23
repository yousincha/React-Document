// // React가 Effect의 재동기화 가능 여부를 확인하는 방법

// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);
//   return <h1>Welcome to the {roomId} room!</h1>;
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

// // Effect는 반응형 값에 반응합니다.
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState("https://localhost:1234");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
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

// // 빈 의존성을 가지고 있는 Effect의 의미
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// const serverUrl = "https://localhost:1234";
// const roomId = "general";

// function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the {roomId} room!</h1>;
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

// // 도전1. 키 입력시마다 재연결되는 문제 해결
// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
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

// // 도전 2. 동기화를 껐다가 켜보세요
// import { useState, useEffect } from "react";

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [canMove, setCanMove] = useState(true);

//   useEffect(() => {
//     function handleMove(e) {
//       if (canMove) {
//         setPosition({ x: e.clientX, y: e.clientY });
//       }
//     }
//     window.addEventListener("pointermove", handleMove);
//     return () => window.removeEventListener("pointermove", handleMove);
//   }, [canMove]);

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

// // 도전3. 오래된 value 버그 조사하기

// import { useState, useEffect } from "react";

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [canMove, setCanMove] = useState(true);

//   function handleMove(e) {
//     if (canMove) {
//       setPosition({ x: e.clientX, y: e.clientY });
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("pointermove", handleMove);
//     return () => window.removeEventListener("pointermove", handleMove);
//   });

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

// // 도전4. 연결 스위치 조정

// import { useState } from "react";
// import ChatRoom from "./chatRoom.js";

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [isEncrypted, setIsEncrypted] = useState(false);
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
//           checked={isEncrypted}
//           onChange={(e) => setIsEncrypted(e.target.checked)}
//         />
//         Enable encryption
//       </label>
//       <hr />
//       <ChatRoom roomId={roomId} isEncrypted={isEncrypted} />
//     </>
//   );
// }

// 도전5. 셀렉트 박스들 채우기

import { useSelectOptions } from "./useSelectOptions.js";

export default function Page() {
  const [planetList, planetId, setPlanetId] = useSelectOptions("/planets");

  const [placeList, placeId, setPlaceId] = useSelectOptions(
    planetId ? `/planets/${planetId}/places` : null
  );

  return (
    <>
      <label>
        Pick a planet:{" "}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList?.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{" "}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList?.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || "..."} on {planetId || "..."}{" "}
      </p>
    </>
  );
}
