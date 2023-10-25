// import { useState, useEffect } from "react";

// export function useCounter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return count;
// }

// import { useState, useEffect } from "react";

// export function useCounter(delay) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + 1);
//     }, delay);
//     return () => clearInterval(id);
//   }, [delay]);
//   return count;
// }

// import { useState, useEffect } from "react";

// export function useCounter(delay) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + 1);
//     }, delay);
//     return () => clearInterval(id);
//   }, [delay]);
//   return count;
// }

import { useState } from "react";
import { useInterval } from "./useInterval.js";

export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);
  return count;
}
