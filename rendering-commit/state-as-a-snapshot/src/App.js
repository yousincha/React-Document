// import { useState } from "react";

// export default function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState("Hi!");
//   if (isSent) {
//     return <h1>Your message is on its way!</h1>;
//   }
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         setIsSent(true);
//         sendMessage(message);
//       }}
//     >
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message) {
//   // ...
// }

//신호등 구현하기
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}

// 1회 렌더
// 클릭 -> 이벤트 핸들러 실행
// walk -> false로 바뀜
// alert
// 2회 렌더
