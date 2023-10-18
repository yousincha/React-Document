// // context: props 전달의 대안
// import Heading from "./Heading.js";
// import Section from "./Section.js";

// export default function ProfilePage() {
//   return (
//     <Section>
//       <Heading>My Profile</Heading>
//       <Post title="Hello traveller!" body="Read about my adventures." />
//       <AllPosts />
//     </Section>
//   );
// }

// function AllPosts() {
//   return (
//     <Section>
//       <Heading>Posts</Heading>
//       <RecentPosts />
//     </Section>
//   );
// }

// function RecentPosts() {
//   return (
//     <Section>
//       <Heading>Recent Posts</Heading>
//       <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
//       <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
//     </Section>
//   );
// }

// function Post({ title, body }) {
//   return (
//     <Section isFancy={true}>
//       <Heading>{title}</Heading>
//       <p>
//         <i>{body}</i>
//       </p>
//     </Section>
//   );
// }

// 도전1. context로 prop drilling 바꾸기
import { useState, useContext } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import { ImageSizeContext } from "./Context.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
