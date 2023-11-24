// // 예제1.

// import { memo } from "react";

// const PostsTab = memo(function PostsTab() {
//   // Log once. The actual slowdown is inside SlowPost.
//   // 한 번만 기록합니다. 실제 속도저하는 SlowPost 내부에서 이뤄집니다.
//   console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

//   let items = [];
//   for (let i = 0; i < 500; i++) {
//     items.push(<SlowPost key={i} index={i} />);
//   }
//   return <ul className="items">{items}</ul>;
// });

// function SlowPost({ index }) {
//   let startTime = performance.now();
//   while (performance.now() - startTime < 1) {
//     // Do nothing for 1 ms per item to emulate extremely slow code
//     // 매우 느린 코드를 구현하기 위해 항목마다 1ms동안 아무것도 하지 않도록 합니다
//   }

//   return <li className="item">Post #{index + 1}</li>;
// }

// export default PostsTab;

// // 예제2.
// import { memo } from "react";

// const PostsTab = memo(function PostsTab() {
//   // Log once. The actual slowdown is inside SlowPost.
//   // 한 번만 기록합니다. 실제 속도저하는 SlowPost 내부에서 이뤄집니다.
//   console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

//   let items = [];
//   for (let i = 0; i < 500; i++) {
//     items.push(<SlowPost key={i} index={i} />);
//   }
//   return <ul className="items">{items}</ul>;
// });

// function SlowPost({ index }) {
//   let startTime = performance.now();
//   while (performance.now() - startTime < 1) {
//     // Do nothing for 1 ms per item to emulate extremely slow code
//     // 매우 느린 코드를 구현하기 위해 항목마다 1ms동안 아무것도 하지 않도록 합니다
//   }

//   return <li className="item">Post #{index + 1}</li>;
// }

// export default PostsTab;

import { memo } from "react";

const PostsTab = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  // 한 번만 기록합니다. 실제 속도저하는 SlowPost 내부에서 이뤄집니다.
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
    // 매우 느린 코드를 구현하기 위해 항목마다 1ms동안 아무것도 하지 않도록 합니다
  }

  return <li className="item">Post #{index + 1}</li>;
}

export default PostsTab;
