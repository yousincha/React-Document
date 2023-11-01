// // 브라우저에서 화면을 다시 그리기 전 레이아웃 측정하기
// import ButtonWithTooltip from "./ButtonWithTooltip.js";

// export default function App() {
//   return (
//     <div>
//       <ButtonWithTooltip
//         tooltipContent={
//           <div>
//             This tooltip does not fit above the button.
//             <br />
//             This is why it's displayed below instead!
//           </div>
//         }
//       >
//         Hover over me (tooltip above)
//       </ButtonWithTooltip>
//       <div style={{ height: 50 }} />
//       <ButtonWithTooltip
//         tooltipContent={<div>This tooltip fits above the button</div>}
//       >
//         Hover over me (tooltip below)
//       </ButtonWithTooltip>
//       <div style={{ height: 50 }} />
//       <ButtonWithTooltip
//         tooltipContent={<div>This tooltip fits above the button</div>}
//       >
//         Hover over me (tooltip below)
//       </ButtonWithTooltip>
//     </div>
//   );
// }

// //useLayoutEffect vs useEffect
// // 예제 1. useLayoutEffect blocks the browser from repainting
// import ButtonWithTooltip from "./ButtonWithTooltip.js";

// export default function App() {
//   return (
//     <div>
//       <ButtonWithTooltip
//         tooltipContent={
//           <div>
//             This tooltip does not fit above the button.
//             <br />
//             This is why it's displayed below instead!
//           </div>
//         }
//       >
//         Hover over me (tooltip above)
//       </ButtonWithTooltip>
//       <div style={{ height: 50 }} />
//       <ButtonWithTooltip
//         tooltipContent={<div>This tooltip fits above the button</div>}
//       >
//         Hover over me (tooltip below)
//       </ButtonWithTooltip>
//       <div style={{ height: 50 }} />
//       <ButtonWithTooltip
//         tooltipContent={<div>This tooltip fits above the button</div>}
//       >
//         Hover over me (tooltip below)
//       </ButtonWithTooltip>
//     </div>
//   );
// }

// 예제2. useEffect는 브라우저를 차단하지 않습니다
import ButtonWithTooltip from "./ButtonWithTooltip.js";

export default function App() {
  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  );
}
