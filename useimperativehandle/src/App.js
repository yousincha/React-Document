// // 부모 컴포넌트가 ref를 가져오면 focus 및 scrollIntoView 메서드 호출
// import { useRef } from "react";
// import MyInput from "./MyInput.js";

// export default function Form() {
//   const ref = useRef(null);

//   function handleClick() {
//     ref.current.focus();
//     // This won't work because the DOM node isn't exposed:
//     // 이 작업은 DOM 노드가 노출되지 않으므로 작동하지 않습니다.
//     // ref.current.style.opacity = 0.5;
//   }

//   return (
//     <form>
//       <MyInput label="Enter your name:" ref={ref} />
//       <button type="button" onClick={handleClick}>
//         Edit
//       </button>
//     </form>
//   );
// }

// 사용자 정의 명령 노출
import { useRef } from "react";
import Post from "./Post.js";

export default function Page() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>Write a comment</button>
      <Post ref={postRef} />
    </>
  );
}
