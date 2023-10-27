// // useRef로 값을 참조하는 예시
// // 예제 1. counter 클릭하기
// import { useRef } from "react";

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!");
//   }

//   return <button onClick={handleClick}>Click me!</button>;
// }

// // 예제 2. 스탑워치
// import { useState, useRef } from "react";

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }

// // useRef로 DOM을 조작하는 예시
// // 예제 1.텍스트 input에 초점 맞추기
// import { useRef } from "react";

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus the input</button>
//     </>
//   );
// }

// // 예제 2. 이미지 스크롤하기
// import { useRef } from "react";

// export default function CatFriends() {
//   const listRef = useRef(null);

//   function scrollToIndex(index) {
//     const listNode = listRef.current;
//     // This line assumes a particular DOM structure:
//     // 다음 코드는 특정 DOM 구조를 가정합니다.
//     const imgNode = listNode.querySelectorAll("li > img")[index];
//     imgNode.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={() => scrollToIndex(0)}>Tom</button>
//         <button onClick={() => scrollToIndex(1)}>Maru</button>
//         <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
//       </nav>
//       <div>
//         <ul ref={listRef}>
//           <li>
//             <img src="https://placekitten.com/g/200/200" alt="Tom" />
//           </li>
//           <li>
//             <img src="https://placekitten.com/g/300/200" alt="Maru" />
//           </li>
//           <li>
//             <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// // 예제 3. 비디오 재생 및 정지하기
// import { useState, useRef } from "react";

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
//       <video
//         width="250"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// }

// 예제 4. 컴포넌트에 ref 호출하기
import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
