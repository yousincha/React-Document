// import { useState, useRef } from "react";
// import Tooltip from "./Tooltip.js";

// export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
//   const [targetRect, setTargetRect] = useState(null);
//   const buttonRef = useRef(null);
//   return (
//     <>
//       <button
//         {...rest}
//         ref={buttonRef}
//         onPointerEnter={() => {
//           const rect = buttonRef.current.getBoundingClientRect();
//           setTargetRect({
//             left: rect.left,
//             top: rect.top,
//             right: rect.right,
//             bottom: rect.bottom,
//           });
//         }}
//         onPointerLeave={() => {
//           setTargetRect(null);
//         }}
//       />
//       {targetRect !== null && (
//         <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
//       )}
//     </>
//   );
// }

// // 예제1
// import { useState, useRef } from "react";
// import Tooltip from "./Tooltip.js";

// export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
//   const [targetRect, setTargetRect] = useState(null);
//   const buttonRef = useRef(null);
//   return (
//     <>
//       <button
//         {...rest}
//         ref={buttonRef}
//         onPointerEnter={() => {
//           const rect = buttonRef.current.getBoundingClientRect();
//           setTargetRect({
//             left: rect.left,
//             top: rect.top,
//             right: rect.right,
//             bottom: rect.bottom,
//           });
//         }}
//         onPointerLeave={() => {
//           setTargetRect(null);
//         }}
//       />
//       {targetRect !== null && (
//         <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
//       )}
//     </>
//   );
// }

// 예제 2
import { useState, useRef } from "react";
import Tooltip from "./Tooltip.js";

export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null);
  const buttonRef = useRef(null);
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect();
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          });
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}
