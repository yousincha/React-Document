// // 접근성 속성에 대한 고유 ID 생성
// import { useId } from "react";

// function PasswordField() {
//   const passwordHintId = useId();
//   return (
//     <>
//       <label>
//         Password:
//         <input type="password" aria-describedby={passwordHintId} />
//       </label>
//       <p id={passwordHintId}>
//         The password should contain at least 18 characters
//       </p>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <h2>Choose password</h2>
//       <PasswordField />
//       <h2>Confirm password</h2>
//       <PasswordField />
//     </>
//   );
// }

// // 여러 관련 요소에 대한 ID 생성
// import { useId } from "react";

// export default function Form() {
//   const id = useId();
//   return (
//     <form>
//       <label htmlFor={id + "-firstName"}>First Name:</label>
//       <input id={id + "-firstName"} type="text" />
//       <hr />
//       <label htmlFor={id + "-lastName"}>Last Name:</label>
//       <input id={id + "-lastName"} type="text" />
//     </form>
//   );
// }

//생성된 모든 ID에 공유 접두사 지정하기
import { useId } from "react";

function PasswordField() {
  const passwordHintId = useId();
  console.log("Generated identifier:", passwordHintId);
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
    </>
  );
}
