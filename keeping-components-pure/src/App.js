// function Recipe({ drinkers }) {
//   return (
//     <ol>    
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={2} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// }

// function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaGathering() {
//   let cups = [];
//   for (let i = 1; i <= 12; i++) {
//     cups.push(<Cup key={i} guest={i} />);
//   }
//   return cups;
// }

// 1. 시계
// import { useState, useEffect } from 'react';
// import Clock from './Clock.js';

// function useTime() {
//   const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }

// export default function App() {
//   const time = useTime();
//   return (
//     <Clock time={time} />
//   );
// }

// 2. 프로필
// import Profile from './Profile.js';

// export default function App() {
//   return (
//     <>
//       <Profile person={{
//         imageId: 'lrWQx8l',
//         name: 'Subrahmanyan Chandrasekhar',
//       }} />
//       <Profile person={{
//         imageId: 'MK3eW3A',
//         name: 'Creola Katherine Johnson',
//       }} />
//     </>
//   )
// }

// 3. 스토리 트레이
import { useState, useEffect } from 'react';
import StoryTray from './StoryTray.js';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories, setStories] = useState([...initialStories])
  let time = useTime();

  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} setStories={setStories}/>
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
