// import { useEffect } from "react";
// import { createConnection } from "./chat.js";
// import { showNotification } from "./notifications.js";

// export function useChatRoom({ serverUrl, roomId }) {
//   useEffect(() => {
//     const options = {
//       serverUrl: serverUrl,
//       roomId: roomId,
//     };
//     const connection = createConnection(options);
//     connection.connect();
//     connection.on("message", (msg) => {
//       showNotification("New message: " + msg);
//     });
//     return () => connection.disconnect();
//   }, [roomId, serverUrl]);
// }

import { useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { createConnection } from "./chat.js";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on("message", (msg) => {
      onMessage(msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
