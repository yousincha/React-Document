// import { Suspense } from "react";
// import Albums from "./Albums.js";
// import Biography from "./Biography.js";
// import Panel from "./Panel.js";

// export default function ArtistPage({ artist }) {
//   return (
//     <>
//       <h1>{artist.name}</h1>
//       <Suspense fallback={<Loading />}>
//         <Biography artistId={artist.id} />
//         <Panel>
//           <Albums artistId={artist.id} />
//         </Panel>
//       </Suspense>
//     </>
//   );
// }

// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }

// import { Suspense } from "react";
// import Albums from "./Albums.js";
// import Biography from "./Biography.js";
// import Panel from "./Panel.js";

// export default function ArtistPage({ artist }) {
//   return (
//     <>
//       <h1>{artist.name}</h1>
//       <Suspense fallback={<BigSpinner />}>
//         <Biography artistId={artist.id} />
//         <Suspense fallback={<AlbumsGlimmer />}>
//           <Panel>
//             <Albums artistId={artist.id} />
//           </Panel>
//         </Suspense>
//       </Suspense>
//     </>
//   );
// }

// function BigSpinner() {
//   return <h2>🌀 Loading...</h2>;
// }

// function AlbumsGlimmer() {
//   return (
//     <div className="glimmer-panel">
//       <div className="glimmer-line" />
//       <div className="glimmer-line" />
//       <div className="glimmer-line" />
//     </div>
//   );
// }

import { Suspense } from "react";
import Albums from "./Albums.js";
import Biography from "./Biography.js";
import Panel from "./Panel.js";

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </>
  );
}

function AlbumsGlimmer() {
  return (
    <div className="glimmer-panel">
      <div className="glimmer-line" />
      <div className="glimmer-line" />
      <div className="glimmer-line" />
    </div>
  );
}
