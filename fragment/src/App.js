// // 여러 엘리먼트 반환하기
// export default function Blog() {
//   return (
//     <>
//       <Post title="An update" body="It's been a while since I posted..." />
//       <Post title="My new blog" body="I am starting a new blog!" />
//     </>
//   );
// }

// function Post({ title, body }) {
//   return (
//     <>
//       <PostTitle title={title} />
//       <PostBody body={body} />
//     </>
//   );
// }

// function PostTitle({ title }) {
//   return <h1>{title}</h1>;
// }

// function PostBody({ body }) {
//   return (
//     <article>
//       <p>{body}</p>
//     </article>
//   );
// }

// Fragment 목록 렌더링하기
import { Fragment } from "react";

const posts = [
  { id: 1, title: "An update", body: "It's been a while since I posted..." },
  { id: 2, title: "My new blog", body: "I am starting a new blog!" },
];

export default function Blog() {
  return posts.map((post) => (
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  ));
}

function PostTitle({ title }) {
  return <h1>{title}</h1>;
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
