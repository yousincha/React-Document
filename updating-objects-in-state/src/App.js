// 1. state를 읽기 전용으로 취급하세요
// import { useState } from 'react';
// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }

// //2. 전개 구문을 사용하여 객체 복사
// import { useImmer } from "use-immer";

// export default function Form() {
//   const [person, updatePerson] = useImmer({
//     name: "Niki de Saint Phalle",
//     artwork: {
//       title: "Blue Nana",
//       city: "Hamburg",
//       image: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

//   function handleNameChange(e) {
//     updatePerson((draft) => {
//       draft.name = e.target.value;
//     });
//   }

//   function handleTitleChange(e) {
//     updatePerson((draft) => {
//       draft.artwork.title = e.target.value;
//     });
//   }

//   function handleCityChange(e) {
//     updatePerson((draft) => {
//       draft.artwork.city = e.target.value;
//     });
//   }

//   function handleImageChange(e) {
//     updatePerson((draft) => {
//       draft.artwork.image = e.target.value;
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input value={person.name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Title:
//         <input value={person.artwork.title} onChange={handleTitleChange} />
//       </label>
//       <label>
//         City:
//         <input value={person.artwork.city} onChange={handleCityChange} />
//       </label>
//       <label>
//         Image:
//         <input value={person.artwork.image} onChange={handleImageChange} />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {" by "}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img src={person.artwork.image} alt={person.artwork.title} />
//     </>
//   );
// }

// 도전1. 잘못된 state 업데이트 수정하기
// import { useState } from "react";

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: "Ranjani",
//     lastName: "Shettar",
//     score: 10,
//   });

//   function handlePlusClick() {
//     setPlayer({
//       ...player,
//       score: player.score + 1,
//     });
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//       ...player,
//       lastName: e.target.value,
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>{" "}
//         <button onClick={handlePlusClick}>+1</button>
//       </label>
//       <label>
//         First name:
//         <input value={player.firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={player.lastName} onChange={handleLastNameChange} />
//       </label>
//     </>
//   );
// }

// //도전2. 변이를 찾고 수정하기
// import { useState } from "react";
// import Background from "./Background.js";
// import Box from "./Box.js";

// const initialPosition = {
//   x: 0,
//   y: 0,
// };

// export default function Canvas() {
//   const [shape, setShape] = useState({
//     color: "orange",
//     position: initialPosition,
//   });

//   function handleMove(dx, dy) {
//     setShape({
//       ...shape,
//       position: {
//         x: shape.position.x + dx,
//         y: shape.position.y + dy,
//       },
//     });
//   }

//   function handleColorChange(e) {
//     setShape({
//       ...shape,
//       color: e.target.value,
//     });
//   }

//   return (
//     <>
//       <select value={shape.color} onChange={handleColorChange}>
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background position={initialPosition} />
//       <Box color={shape.color} position={shape.position} onMove={handleMove}>
//         Drag me!
//       </Box>
//     </>
//   );
// }

//도전 3. Immer로 객체 업데이트 하기
import { useImmer } from "use-immer";
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    updateShape((draft) => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    updateShape((draft) => {
      draft.color = e.target.value;
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
