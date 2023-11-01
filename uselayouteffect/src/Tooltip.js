// import { useRef, useLayoutEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import TooltipContainer from "./TooltipContainer.js";

// export default function Tooltip({ children, targetRect }) {
//   const ref = useRef(null);
//   const [tooltipHeight, setTooltipHeight] = useState(0);

//   useLayoutEffect(() => {
//     const { height } = ref.current.getBoundingClientRect();
//     setTooltipHeight(height);
//     console.log("Measured tooltip height: " + height);
//   }, []);

//   let tooltipX = 0;
//   let tooltipY = 0;
//   if (targetRect !== null) {
//     tooltipX = targetRect.left;
//     tooltipY = targetRect.top - tooltipHeight;
//     if (tooltipY < 0) {
//       // It doesn't fit above, so place below.
//       tooltipY = targetRect.bottom;
//     }
//   }

//   return createPortal(
//     <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
//       {children}
//     </TooltipContainer>,
//     document.body
//   );
// }

// // 예제1.
// import { useRef, useLayoutEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import TooltipContainer from "./TooltipContainer.js";

// export default function Tooltip({ children, targetRect }) {
//   const ref = useRef(null);
//   const [tooltipHeight, setTooltipHeight] = useState(0);

//   useLayoutEffect(() => {
//     const { height } = ref.current.getBoundingClientRect();
//     setTooltipHeight(height);
//   }, []);

//   let tooltipX = 0;
//   let tooltipY = 0;
//   if (targetRect !== null) {
//     tooltipX = targetRect.left;
//     tooltipY = targetRect.top - tooltipHeight;
//     if (tooltipY < 0) {
//       // It doesn't fit above, so place below.
//       tooltipY = targetRect.bottom;
//     }
//   }

//   return createPortal(
//     <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
//       {children}
//     </TooltipContainer>,
//     document.body
//   );
// }

// 예제2.

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer.js";

export default function Tooltip({ children, targetRect }) {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  // This artificially slows down rendering
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Do nothing for a bit...
  }

  useEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}
