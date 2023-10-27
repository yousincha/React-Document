// // 트리 깊숙이 데이터 전달하기
// import { createContext, useContext } from "react";

// const ThemeContext = createContext(null);

// export default function MyApp() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Form />
//     </ThemeContext.Provider>
//   );
// }

// function Form() {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return <button className={className}>{children}</button>;
// }

// // context 업데이트 예시
// // 예제 1. context를 통해 값 업데이트 하기
// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(null);

// export default function MyApp() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <ThemeContext.Provider value={theme}>
//       <Form />
//       <label>
//         <input
//           type="checkbox"
//           checked={theme === "dark"}
//           onChange={(e) => {
//             setTheme(e.target.checked ? "dark" : "light");
//           }}
//         />
//         Use dark mode
//       </label>
//     </ThemeContext.Provider>
//   );
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return <button className={className}>{children}</button>;
// }

// // 예제 2. context를 통해 객체 업데이트
// import { createContext, useContext, useState } from "react";

// const CurrentUserContext = createContext(null);

// export default function MyApp() {
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <CurrentUserContext.Provider
//       value={{
//         currentUser,
//         setCurrentUser,
//       }}
//     >
//       <Form />
//     </CurrentUserContext.Provider>
//   );
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <LoginButton />
//     </Panel>
//   );
// }

// function LoginButton() {
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

//   if (currentUser !== null) {
//     return <p>You logged in as {currentUser.name}.</p>;
//   }

//   return (
//     <Button
//       onClick={() => {
//         setCurrentUser({ name: "Advika" });
//       }}
//     >
//       Log in as Advika
//     </Button>
//   );
// }

// function Panel({ title, children }) {
//   return (
//     <section className="panel">
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children, onClick }) {
//   return (
//     <button className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// // 예제 3. 다중 context
// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(null);
// const CurrentUserContext = createContext(null);

// export default function MyApp() {
//   const [theme, setTheme] = useState("light");
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <ThemeContext.Provider value={theme}>
//       <CurrentUserContext.Provider
//         value={{
//           currentUser,
//           setCurrentUser,
//         }}
//       >
//         <WelcomePanel />
//         <label>
//           <input
//             type="checkbox"
//             checked={theme === "dark"}
//             onChange={(e) => {
//               setTheme(e.target.checked ? "dark" : "light");
//             }}
//           />
//           Use dark mode
//         </label>
//       </CurrentUserContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// function WelcomePanel({ children }) {
//   const { currentUser } = useContext(CurrentUserContext);
//   return (
//     <Panel title="Welcome">
//       {currentUser !== null ? <Greeting /> : <LoginForm />}
//     </Panel>
//   );
// }

// function Greeting() {
//   const { currentUser } = useContext(CurrentUserContext);
//   return <p>You logged in as {currentUser.name}.</p>;
// }

// function LoginForm() {
//   const { setCurrentUser } = useContext(CurrentUserContext);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const canLogin = firstName !== "" && lastName !== "";
//   return (
//     <>
//       <label>
//         First name{": "}
//         <input
//           required
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Last name{": "}
//         <input
//           required
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </label>
//       <br />
//       <Button
//         disabled={!canLogin}
//         onClick={() => {
//           setCurrentUser({
//             name: firstName + " " + lastName,
//           });
//         }}
//       >
//         Log in
//       </Button>
//       {!canLogin && <i>Fill in both fields.</i>}
//     </>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children, disabled, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return (
//     <button className={className} disabled={disabled} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// // 예제 4. 단일 컴포넌트로 providers 추출하기
// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(null);
// const CurrentUserContext = createContext(null);

// export default function MyApp() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <MyProviders theme={theme} setTheme={setTheme}>
//       <WelcomePanel />
//       <label>
//         <input
//           type="checkbox"
//           checked={theme === "dark"}
//           onChange={(e) => {
//             setTheme(e.target.checked ? "dark" : "light");
//           }}
//         />
//         Use dark mode
//       </label>
//     </MyProviders>
//   );
// }

// function MyProviders({ children, theme, setTheme }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <ThemeContext.Provider value={theme}>
//       <CurrentUserContext.Provider
//         value={{
//           currentUser,
//           setCurrentUser,
//         }}
//       >
//         {children}
//       </CurrentUserContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// function WelcomePanel({ children }) {
//   const { currentUser } = useContext(CurrentUserContext);
//   return (
//     <Panel title="Welcome">
//       {currentUser !== null ? <Greeting /> : <LoginForm />}
//     </Panel>
//   );
// }

// function Greeting() {
//   const { currentUser } = useContext(CurrentUserContext);
//   return <p>You logged in as {currentUser.name}.</p>;
// }

// function LoginForm() {
//   const { setCurrentUser } = useContext(CurrentUserContext);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const canLogin = firstName !== "" && lastName !== "";
//   return (
//     <>
//       <label>
//         First name{": "}
//         <input
//           required
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Last name{": "}
//         <input
//           required
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </label>
//       <br />
//       <Button
//         disabled={!canLogin}
//         onClick={() => {
//           setCurrentUser({
//             name: firstName + " " + lastName,
//           });
//         }}
//       >
//         Log in
//       </Button>
//       {!canLogin && <i>Fill in both fields.</i>}
//     </>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children, disabled, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return (
//     <button className={className} disabled={disabled} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// // 예제5. context와 reducer를 통한 확장
// import AddTask from "./AddTask.js";
// import TaskList from "./TaskList.js";
// import { TasksProvider } from "./TasksContext.js";

// export default function TaskApp() {
//   return (
//     <TasksProvider>
//       <h1>Day off in Kyoto</h1>
//       <AddTask />
//       <TaskList />
//     </TasksProvider>
//   );
// }

// // fallback 기본값 지정하기
// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext("light");

// export default function MyApp() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <>
//       <ThemeContext.Provider value={theme}>
//         <Form />
//       </ThemeContext.Provider>
//       <Button
//         onClick={() => {
//           setTheme(theme === "dark" ? "light" : "dark");
//         }}
//       >
//         Toggle theme
//       </Button>
//     </>
//   );
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return (
//     <button className={className} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// // context 재정의 예시
// // 예제 1. 테마 재정의 하기
// import { createContext, useContext } from "react";

// const ThemeContext = createContext(null);

// export default function MyApp() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Form />
//     </ThemeContext.Provider>
//   );
// }

// function Form() {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//       <ThemeContext.Provider value="light">
//         <Footer />
//       </ThemeContext.Provider>
//     </Panel>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <Button>Settings</Button>
//     </footer>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       {title && <h1>{title}</h1>}
//       {children}
//     </section>
//   );
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return <button className={className}>{children}</button>;
// }

// 예제 2. 자동으로 중첩되는 제목
import Heading from "./Heading.js";
import Section from "./Section.js";

export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
