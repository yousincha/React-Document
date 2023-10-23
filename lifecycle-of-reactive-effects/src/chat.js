// export function createConnection(serverUrl, roomId) {
//   // A real implementation would actually connect to the server
//   return {
//     connect() {
//       console.log(
//         '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
//       );
//     },
//     disconnect() {
//       console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//     },
//   };
// }

// export function createConnection(serverUrl, roomId) {
//   // A real implementation would actually connect to the server
//   return {
//     connect() {
//       console.log(
//         '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
//       );
//     },
//     disconnect() {
//       console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//     },
//   };
// }

// export function createConnection(serverUrl, roomId) {
//   // A real implementation would actually connect to the server
//   return {
//     connect() {
//       console.log(
//         '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
//       );
//     },
//     disconnect() {
//       console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//     },
//   };
// }

// export function createConnection(serverUrl, roomId) {
//   // A real implementation would actually connect to the server
//   return {
//     connect() {
//       console.log(
//         '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
//       );
//     },
//     disconnect() {
//       console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//     },
//   };
// }

export function createEncryptedConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ 🔐 Connecting to "' + roomId + "... (encrypted)");
    },
    disconnect() {
      console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
    },
  };
}

export function createUnencryptedConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + "... (unencrypted)");
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
    },
  };
}
