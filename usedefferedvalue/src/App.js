// import { Suspense, useState, useDeferredValue } from "react";
// import SearchResults from "./SearchResults.js";

// export default function App() {
//   const [query, setQuery] = useState("");
//   const deferredQuery = useDeferredValue(query);
//   const isStale = query !== deferredQuery;
//   return (
//     <>
//       <label>
//         Search albums:
//         <input value={query} onChange={(e) => setQuery(e.target.value)} />
//       </label>
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <div
//           style={{
//             opacity: isStale ? 0.5 : 1,
//             transition: isStale
//               ? "opacity 0.2s 0.2s linear"
//               : "opacity 0s 0s linear",
//           }}
//         >
//           <SearchResults query={deferredQuery} />
//         </div>
//       </Suspense>
//     </>
//   );
// }

// // UI의 일부에 대해 리렌더링 연기하기
// // 예제1. 목록 리렌더링 지연
// import { useState, useDeferredValue } from "react";
// import SlowList from "./SlowList.js";

// export default function App() {
//   const [text, setText] = useState("");
//   const deferredText = useDeferredValue(text);
//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <SlowList text={deferredText} />
//     </>
//   );
// }

// 예제2. 목록의 최적화되지 않은 리렌더링
import { useState } from "react";
import SlowList from "./SlowList.js";

export default function App() {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  );
}
