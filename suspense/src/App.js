// 콘텐츠를 로딩하는 동안 폴백 표시하기
// import { useState } from "react";
// import ArtistPage from "./ArtistPage.js";

// export default function App() {
//   const [show, setShow] = useState(false);
//   if (show) {
//     return (
//       <ArtistPage
//         artist={{
//           id: "the-beatles",
//           name: "The Beatles",
//         }}
//       />
//     );
//   } else {
//     return (
//       <button onClick={() => setShow(true)}>
//         Open The Beatles artist page
//       </button>
//     );
//   }
// }

// // 새 콘텐츠가 로드되는 동안 오래된 콘텐츠 표시하기
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
//         <div style={{ opacity: isStale ? 0.5 : 1 }}>
//           <SearchResults query={deferredQuery} />
//         </div>
//       </Suspense>
//     </>
//   );
// }

// 이미 표시된 콘텐츠가 숨겨지지 않도록 방지하기
import { Suspense, useState, useTransition } from "react";
import IndexPage from "./IndexPage.js";
import ArtistPage from "./ArtistPage.js";
import Layout from "./Layout.js";

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}

function Router() {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === "/") {
    content = <IndexPage navigate={navigate} />;
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  }
  return <Layout isPending={isPending}>{content}</Layout>;
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
