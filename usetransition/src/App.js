// // useTransition VS 일반 state 업데이트
// // 예제1. 트랜지션에서 현재 탭 업데이트하기
// import { useState, useTransition } from "react";
// import TabButton from "./TabButton.js";
// import AboutTab from "./AboutTab.js";
// import PostsTab from "./PostsTab.js";
// import ContactTab from "./ContactTab.js";

// export default function TabContainer() {
//   const [isPending, startTransition] = useTransition();
//   const [tab, setTab] = useState("about");

//   function selectTab(nextTab) {
//     startTransition(() => {
//       setTab(nextTab);
//     });
//   }

//   return (
//     <>
//       <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
//         About
//       </TabButton>
//       <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
//         Posts (slow)
//       </TabButton>
//       <TabButton
//         isActive={tab === "contact"}
//         onClick={() => selectTab("contact")}
//       >
//         Contact
//       </TabButton>
//       <hr />
//       {tab === "about" && <AboutTab />}
//       {tab === "posts" && <PostsTab />}
//       {tab === "contact" && <ContactTab />}
//     </>
//   );
// }

// // 예제2. 일반 state 업데이트
// import { useState } from "react";
// import TabButton from "./TabButton.js";
// import AboutTab from "./AboutTab.js";
// import PostsTab from "./PostsTab.js";
// import ContactTab from "./ContactTab.js";

// export default function TabContainer() {
//   const [tab, setTab] = useState("about");

//   function selectTab(nextTab) {
//     setTab(nextTab);
//   }

//   return (
//     <>
//       <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
//         About
//       </TabButton>
//       <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
//         Posts (slow)
//       </TabButton>
//       <TabButton
//         isActive={tab === "contact"}
//         onClick={() => selectTab("contact")}
//       >
//         Contact
//       </TabButton>
//       <hr />
//       {tab === "about" && <AboutTab />}
//       {tab === "posts" && <PostsTab />}
//       {tab === "contact" && <ContactTab />}
//     </>
//   );
// }

// // 트랜지션에서 상위 컴포넌트 업데이트 하기
// import { useState } from "react";
// import TabButton from "./TabButton.js";
// import AboutTab from "./AboutTab.js";
// import PostsTab from "./PostsTab.js";
// import ContactTab from "./ContactTab.js";

// export default function TabContainer() {
//   const [tab, setTab] = useState("about");
//   return (
//     <>
//       <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
//         About
//       </TabButton>
//       <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>
//         Posts (slow)
//       </TabButton>
//       <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>
//         Contact
//       </TabButton>
//       <hr />
//       {tab === "about" && <AboutTab />}
//       {tab === "posts" && <PostsTab />}
//       {tab === "contact" && <ContactTab />}
//     </>
//   );
// }

// // 트랜지션 중에 ‘보류중’ state 표시하기
// import { useState } from "react";
// import TabButton from "./TabButton.js";
// import AboutTab from "./AboutTab.js";
// import PostsTab from "./PostsTab.js";
// import ContactTab from "./ContactTab.js";

// export default function TabContainer() {
//   const [tab, setTab] = useState("about");
//   return (
//     <>
//       <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
//         About
//       </TabButton>
//       <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>
//         Posts (slow)
//       </TabButton>
//       <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>
//         Contact
//       </TabButton>
//       <hr />
//       {tab === "about" && <AboutTab />}
//       {tab === "posts" && <PostsTab />}
//       {tab === "contact" && <ContactTab />}
//     </>
//   );
// }

// // 원치 않는 로딩 표시 방지하기

// import { Suspense, useState } from "react";
// import TabButton from "./TabButton.js";
// import AboutTab from "./AboutTab.js";
// import PostsTab from "./PostsTab.js";
// import ContactTab from "./ContactTab.js";

// export default function TabContainer() {
//   const [tab, setTab] = useState("about");
//   return (
//     <Suspense fallback={<h1>🌀 Loading...</h1>}>
//       <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
//         About
//       </TabButton>
//       <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>
//         Posts
//       </TabButton>
//       <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>
//         Contact
//       </TabButton>
//       <hr />
//       {tab === "about" && <AboutTab />}
//       {tab === "posts" && <PostsTab />}
//       {tab === "contact" && <ContactTab />}
//     </Suspense>
//   );
// }

// Suspense가 도입된 라우터 구축하기
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
