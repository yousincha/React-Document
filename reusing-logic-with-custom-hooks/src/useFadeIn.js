// import { useEffect } from "react";

// export function useFadeIn(ref, duration) {
//   useEffect(() => {
//     const node = ref.current;

//     let startTime = performance.now();
//     let frameId = null;

//     function onFrame(now) {
//       const timePassed = now - startTime;
//       const progress = Math.min(timePassed / duration, 1);
//       onProgress(progress);
//       if (progress < 1) {
//         // We still have more frames to paint
//         // 아직 칠해야 할 프레임이 남아있습니다
//         frameId = requestAnimationFrame(onFrame);
//       }
//     }

//     function onProgress(progress) {
//       node.style.opacity = progress;
//     }

//     function start() {
//       onProgress(0);
//       startTime = performance.now();
//       frameId = requestAnimationFrame(onFrame);
//     }

//     function stop() {
//       cancelAnimationFrame(frameId);
//       startTime = null;
//       frameId = null;
//     }

//     start();
//     return () => stop();
//   }, [ref, duration]);
// }

// import { useState, useEffect } from "react";
// import { experimental_useEffectEvent as useEffectEvent } from "react";

// export function useFadeIn(ref, duration) {
//   const [isRunning, setIsRunning] = useState(true);

//   useAnimationLoop(isRunning, (timePassed) => {
//     const progress = Math.min(timePassed / duration, 1);
//     ref.current.style.opacity = progress;
//     if (progress === 1) {
//       setIsRunning(false);
//     }
//   });
// }

// function useAnimationLoop(isRunning, drawFrame) {
//   const onFrame = useEffectEvent(drawFrame);

//   useEffect(() => {
//     if (!isRunning) {
//       return;
//     }

//     const startTime = performance.now();
//     let frameId = null;

//     function tick(now) {
//       const timePassed = now - startTime;
//       onFrame(timePassed);
//       frameId = requestAnimationFrame(tick);
//     }

//     tick();
//     return () => cancelAnimationFrame(frameId);
//   }, [isRunning]);
// }

import { useState, useEffect } from "react";
import { FadeInAnimation } from "./animation.js";

export function useFadeIn(ref, duration) {
  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(duration);
    return () => {
      animation.stop();
    };
  }, [ref, duration]);
}
