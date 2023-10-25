// // 컴포넌트가 네트워크 state와 동기화된 상태
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

// // 동작에 따른 업데이트 확인
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

// //커스텀 훅의 상태적인 로직(stateful logic) 공유

// import { useState } from "react";

// export default function Form() {
//   const [firstName, setFirstName] = useState("Mary");
//   const [lastName, setLastName] = useState("Poppins");

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p>
//         <b>
//           Good morning, {firstName} {lastName}.
//         </b>
//       </p>
//     </>
//   );
// }

// // 반복 로직을 커스텀 훅으로 추출
// import { useFormInput } from "./useFormInput.js";

// export default function Form() {
//   const firstNameProps = useFormInput("Mary");
//   const lastNameProps = useFormInput("Poppins");

//   return (
//     <>
//       <label>
//         First name:
//         <input {...firstNameProps} />
//       </label>
//       <br />
//       <label>
//         Last name:
//         <input {...lastNameProps} />
//       </label>
//       <p>
//         <b>
//           Good morning, {firstNameProps.value} {lastNameProps.value}.
//         </b>
//       </p>
//     </>
//   );
// }

// //훅 사이에 반응형 값 전달하기

// import { useState } from "react";
// import ChatRoom from "./ChatRoom.js";

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

// // Effect 코드를 커스텀 훅으로 옮기기
// import { useState } from "react";
// import ChatRoom from "./ChatRoom.js";

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

// // 이벤트 핸들러를 커스텀 Hook에 전달

// import { useState } from "react";
// import ChatRoom from "./ChatRoom.js";

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

// // 더 나은 패턴으로 마이그레이션하는데 도움주는 커스텀 훅
// import { useOnlineStatus } from "./useOnlineStatus.js";

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log("✅ Progress saved");
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? "Save progress" : "Reconnecting..."}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <SaveButton />
//       <StatusBar />
//     </>
//   );
// }

// // 여러가지 방법의 애니메이션 구현
// // 1.  애니메이션 루프를 설정하는 Effect로 시작
// import { useState, useEffect, useRef } from "react";

// function Welcome() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const duration = 1000;
//     const node = ref.current;

//     let startTime = performance.now();
//     let frameId = null;

//     function onFrame(now) {
//       const timePassed = now - startTime;
//       const progress = Math.min(timePassed / duration, 1);
//       onProgress(progress);
//       if (progress < 1) {
//         // We still have more frames to paint
//         // 아직 칠해야 할 프레임이 남아있습니다
//         frameId = requestAnimationFrame(onFrame);
//       }
//     }

//     function onProgress(progress) {
//       node.style.opacity = progress;
//     }

//     function start() {
//       onProgress(0);
//       startTime = performance.now();
//       frameId = requestAnimationFrame(onFrame);
//     }

//     function stop() {
//       cancelAnimationFrame(frameId);
//       startTime = null;
//       frameId = null;
//     }

//     start();
//     return () => stop();
//   }, []);

//   return (
//     <h1 className="welcome" ref={ref}>
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

// // 2. 로직을 useFadeIn 커스텀 훅으로 추출
// import { useState, useEffect, useRef } from "react";
// import { useFadeIn } from "./useFadeIn.js";

// function Welcome() {
//   const ref = useRef(null);

//   useFadeIn(ref, 1000);

//   return (
//     <h1 className="welcome" ref={ref}>
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

// // 3. useFadeIn에서 추출하여 useAnimationLoop라는 새로운 커스텀 훅으로 만들기
// import { useState, useEffect, useRef } from "react";
// import { useFadeIn } from "./useFadeIn.js";

// function Welcome() {
//   const ref = useRef(null);

//   useFadeIn(ref, 1000);

//   return (
//     <h1 className="welcome" ref={ref}>
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

// // 4. 대부분의 명령형 로직을 JavaScript 클래스 내부로 옮기기

// import { useState, useEffect, useRef } from "react";
// import { useFadeIn } from "./useFadeIn.js";

// function Welcome() {
//   const ref = useRef(null);

//   useFadeIn(ref, 1000);

//   return (
//     <h1 className="welcome" ref={ref}>
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

// // 5. 일반 CSS 애니메이션 구현
// import { useState, useEffect, useRef } from "react";
// import "./welcome.css";

// function Welcome() {
//   return <h1 className="welcome">Welcome</h1>;
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

// // 도전1. useCounter 훅 추출하기
// import { useCounter } from "./useCounter.js";

// export default function Counter() {
//   const count = useCounter();
//   return <h1>Seconds passed: {count}</h1>;
// }

// // 도전2. 카운터 지연을 구성 가능하게 만들기
// import { useState } from "react";
// import { useCounter } from "./useCounter.js";

// export default function Counter() {
//   const [delay, setDelay] = useState(1000);
//   const count = useCounter(delay);
//   return (
//     <>
//       <label>
//         Tick duration: {delay} ms
//         <br />
//         <input
//           type="range"
//           value={delay}
//           min="10"
//           max="2000"
//           onChange={(e) => setDelay(Number(e.target.value))}
//         />
//       </label>
//       <hr />
//       <h1>Ticks: {count}</h1>
//     </>
//   );
// }

// // 도전3. useCounter에서 useInterval 추출하기
// import { useState } from "react";
// import { useCounter } from "./useCounter.js";

// export default function Counter() {
//   const count = useCounter(1000);
//   return <h1>Seconds passed: {count}</h1>;
// }

// // 도전4. 인터벌 리셋 고치기
// import { useCounter } from "./useCounter.js";
// import { useInterval } from "./useInterval.js";

// export default function Counter() {
//   const count = useCounter(1000);

//   useInterval(() => {
//     const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
//     document.body.style.backgroundColor = randomColor;
//   }, 2000);

//   return <h1>Seconds passed: {count}</h1>;
// }

// 도전5. 비틀거리는 움직임 구현하기
import { useState, useEffect } from "react";
import { usePointerPosition } from "./usePointerPosition.js";

function useDelayedValue(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
