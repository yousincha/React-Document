// // Effect를 사용한 동영상 실행

// import { useState, useRef, useEffect } from "react";

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       console.log("Calling video.play()");
//       ref.current.play();
//     } else {
//       console.log("Calling video.pause()");
//       ref.current.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState("");
//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

// // 클린업 함수 사용
// import { useEffect } from "react";
// import { createConnection } from "./chat.js";

// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the chat!</h1>;
// }

// // Mount로 어떻게 Effect가 작동하는지 확인하기
// import { useState, useEffect } from "react";

// function Playground() {
//   const [text, setText] = useState("a");

//   useEffect(() => {
//     function onTimeout() {
//       console.log("⏰ " + text);
//     }

//     console.log('🔵 Schedule "' + text + '" log');
//     const timeoutId = setTimeout(onTimeout, 3000);

//     return () => {
//       console.log('🟡 Cancel "' + text + '" log');
//       clearTimeout(timeoutId);
//     };
//   }, [text]);

//   return (
//     <>
//       <label>
//         What to log:{" "}
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//       </label>
//       <h1>{text}</h1>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Unmount" : "Mount"} the component
//       </button>
//       {show && <hr />}
//       {show && <Playground />}
//     </>
//   );
// }

// // 도전1. 마운트시 필드에 초점 맞추기
// import { useState } from "react";
// import MyInput from "./MyInput.js";

// export default function Form() {
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState("Taylor");
//   const [upper, setUpper] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow((s) => !s)}>
//         {show ? "Hide" : "Show"} form
//       </button>
//       <br />
//       <hr />
//       {show && (
//         <>
//           <label>
//             Enter your name:
//             <MyInput value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               checked={upper}
//               onChange={(e) => setUpper(e.target.checked)}
//             />
//             Make it uppercase
//           </label>
//           <p>
//             Hello, <b>{upper ? name.toUpperCase() : name}</b>
//           </p>
//         </>
//       )}
//     </>
//   );
// }

// //도전2. 조건부로 필드에 초점 맞추기
// import { useState } from "react";
// import MyInput from "./MyInput.js";

// export default function Form() {
//   const [show, setShow] = useState(false);
//   const [firstName, setFirstName] = useState("Taylor");
//   const [lastName, setLastName] = useState("Swift");
//   const [upper] = useState(false);
//   const name = firstName + " " + lastName;
//   return (
//     <>
//       <button onClick={() => setShow((s) => !s)}>
//         {show ? "Hide" : "Show"} form
//       </button>
//       <br />
//       <hr />
//       {show && (
//         <>
//           <label>
//             Enter your first name:
//             <MyInput
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               shouldFocus={true}
//             />
//           </label>
//           <label>
//             Enter your last name:
//             <MyInput
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               shouldFocus={false}
//             />
//           </label>
//           <p>
//             Hello, <b>{upper ? name.toUpperCase() : name}</b>
//           </p>
//         </>
//       )}
//     </>
//   );
// }

// // 도전3. 두 번 발생하는 interval 수정
// import { useState } from "react";
// import Counter from "./Counter.js";

// export default function Form() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow((s) => !s)}>
//         {show ? "Hide" : "Show"} counter
//       </button>
//       <br />
//       <hr />
//       {show && <Counter />}
//     </>
//   );
// }

// 도전 4. Effect 내부의 페칭 수정하기
import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";

export default function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}
