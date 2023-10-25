// import { useState, useEffect } from "react";
// import { createConnection } from "./chat.js";

// export default function ChatRoom({ roomId, serverUrl }) {
//   useEffect(() => {
//     const connection = createConnection({
//       roomId: roomId,
//       serverUrl: serverUrl,
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, serverUrl]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./chat.js";

export default function ChatRoom({ roomId, isEncrypted, onMessage }) {
  const onReceiveMessage = useEffectEvent(onMessage);

  useEffect(() => {
    function createConnection() {
      const options = {
        serverUrl: "https://localhost:1234",
        roomId: roomId,
      };
      if (isEncrypted) {
        return createEncryptedConnection(options);
      } else {
        return createUnencryptedConnection(options);
      }
    }

    const connection = createConnection();
    connection.on("message", (msg) => onReceiveMessage(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
