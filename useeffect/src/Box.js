// import { useRef, useEffect } from "react";

// export default function Box() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const div = ref.current;
//     const observer = new IntersectionObserver((entries) => {
//       const entry = entries[0];
//       if (entry.isIntersecting) {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//       } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//       }
//     });
//     observer.observe(div, {
//       threshold: 1.0,
//     });
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{
//         margin: 20,
//         height: 100,
//         width: 100,
//         border: "2px solid black",
//         backgroundColor: "blue",
//       }}
//     />
//   );
// }

import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver.js";

export default function Box() {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
}
