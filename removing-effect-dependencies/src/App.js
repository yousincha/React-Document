// // 커스텀 훅: 컴포넌트간의 로직 공유

// import { useState, useEffect } from "react";

// export default function StatusBar() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
// }

// // 다른 컴포넌트에서도 동일한 로직을 사용
// import { useState, useEffect } from "react";

// export default function SaveButton() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   function handleSaveClick() {
//     console.log("✅ Progress saved");
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? "Save progress" : "Reconnecting..."}
//     </button>
//   );
// }

// isOnline의 값을 return하고, 컴포넌트들이 이 값을 읽을 수 있게 함
import { useOnlineStatus } from "./useOnlineStatus.js";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
