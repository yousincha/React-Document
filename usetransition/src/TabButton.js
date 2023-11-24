// // 예제1.
// import { useTransition } from "react";

// export default function TabButton({ children, isActive, onClick }) {
//   if (isActive) {
//     return <b>{children}</b>;
//   }
//   return (
//     <button
//       onClick={() => {
//         onClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// // 예제2.
// import { useTransition } from "react";

// export default function TabButton({ children, isActive, onClick }) {
//   if (isActive) {
//     return <b>{children}</b>;
//   }
//   return (
//     <button
//       onClick={() => {
//         onClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// import { useTransition } from "react";

// export default function TabButton({ children, isActive, onClick }) {
//   const [isPending, startTransition] = useTransition();
//   if (isActive) {
//     return <b>{children}</b>;
//   }
//   return (
//     <button
//       onClick={() => {
//         startTransition(() => {
//           onClick();
//         });
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// import { useTransition } from "react";

// export default function TabButton({ children, isActive, onClick }) {
//   const [isPending, startTransition] = useTransition();
//   if (isActive) {
//     return <b>{children}</b>;
//   }
//   if (isPending) {
//     return <b className="pending">{children}</b>;
//   }
//   return (
//     <button
//       onClick={() => {
//         startTransition(() => {
//           onClick();
//         });
//       }}
//     >
//       {children}
//     </button>
//   );
// }

import { useTransition } from "react";

export default function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>;
  }
  if (isPending) {
    return <b className="pending">{children}</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </button>
  );
}
