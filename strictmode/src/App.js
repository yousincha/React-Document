// // 개발환경에서 이중 렌더링으로 발견된 버그 수정하기
// import { useState } from "react";
// import StoryTray from "./StoryTray.js";

// let initialStories = [
//   { id: 0, label: "Ankit's Story" },
//   { id: 1, label: "Taylor's Story" },
// ];

// export default function App() {
//   let [stories] = useState(initialStories);
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         textAlign: "center",
//       }}
//     >
//       <StoryTray stories={stories} />
//     </div>
//   );
// }

// 개발 환경에서 Effect를 재실행하여 발견된 버그 수정하기
import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
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
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
