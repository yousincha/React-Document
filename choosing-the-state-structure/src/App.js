// //state 중복피하기

// import { useState } from "react";

// const initialItems = [
//   { title: "pretzels", id: 0 },
//   { title: "crispy seaweed", id: 1 },
//   { title: "granola bar", id: 2 },
// ];

// export default function Menu() {
//   const [items, setItems] = useState(initialItems);
//   const [selectedId, setSelectedId] = useState(0);

//   const selectedItem = items.find((item) => item.id === selectedId);

//   function handleItemChange(id, e) {
//     setItems(
//       items.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             title: e.target.value,
//           };
//         } else {
//           return item;
//         }
//       })
//     );
//   }

//   return (
//     <>
//       <h2>What's your travel snack?</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={(e) => {
//                 handleItemChange(item.id, e);
//               }}
//             />{" "}
//             <button
//               onClick={() => {
//                 setSelectedId(item.id);
//               }}
//             >
//               Choose
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem.title}.</p>
//     </>
//   );
// }

// // 깊게 중첩된 state 피하기
// import { useImmer } from "use-immer";
// import { initialTravelPlan } from "./places.js";

// export default function TravelPlan() {
//   const [plan, updatePlan] = useImmer(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     updatePlan((draft) => {
//       // Remove from the parent place's child IDs.
//       const parent = draft[parentId];
//       parent.childIds = parent.childIds.filter((id) => id !== childId);

//       // Forget this place and all its subtree.
//       deleteAllChildren(childId);
//       function deleteAllChildren(id) {
//         const place = draft[id];
//         place.childIds.forEach(deleteAllChildren);
//         delete draft[id];
//       }
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map((id) => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// function PlaceTree({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button
//         onClick={() => {
//           onComplete(parentId, id);
//         }}
//       >
//         Complete
//       </button>
//       {childIds.length > 0 && (
//         <ol>
//           {childIds.map((childId) => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// // 도전1. 업데이트되지 않는 컴포넌트 수정하기
// import { useState, useEffect } from "react";
// import Clock from "./Clock.js";

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
//   const [color, setColor] = useState("lightcoral");
//   return (
//     <div>
//       <p>
//         Pick a color:{" "}
//         <select value={color} onChange={(e) => setColor(e.target.value)}>
//           <option value="lightcoral">lightcoral</option>
//           <option value="midnightblue">midnightblue</option>
//           <option value="rebeccapurple">rebeccapurple</option>
//         </select>
//       </p>
//       <Clock color={color} time={time.toLocaleTimeString()} />
//     </div>
//   );
// }

// // 도전2. 깨진 포장 목록 수정

// import { useState } from "react";
// import AddItem from "./AddItem.js";
// import PackingList from "./PackingList.js";

// let nextId = 3;
// const initialItems = [
//   { id: 0, title: "Warm socks", packed: true },
//   { id: 1, title: "Travel journal", packed: false },
//   { id: 2, title: "Watercolors", packed: false },
// ];

// export default function TravelPlan() {
//   const [items, setItems] = useState(initialItems);

//   const total = items.length;
//   const packed = items.filter((item) => item.packed).length;

//   function handleAddItem(title) {
//     setItems([
//       ...items,
//       {
//         id: nextId++,
//         title: title,
//         packed: false,
//       },
//     ]);
//   }

//   function handleChangeItem(nextItem) {
//     setItems(
//       items.map((item) => {
//         if (item.id === nextItem.id) {
//           return nextItem;
//         } else {
//           return item;
//         }
//       })
//     );
//   }

//   function handleDeleteItem(itemId) {
//     setItems(items.filter((item) => item.id !== itemId));
//   }

//   return (
//     <>
//       <AddItem onAddItem={handleAddItem} />
//       <PackingList
//         items={items}
//         onChangeItem={handleChangeItem}
//         onDeleteItem={handleDeleteItem}
//       />
//       <hr />
//       <b>
//         {packed} out of {total} packed!
//       </b>
//     </>
//   );
// }

// // 도전3. 사라지는 선택 항목 수정
// import { useState } from "react";
// import { initialLetters } from "./data.js";
// import Letter from "./Letter.js";

// export default function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedId, setHighlightedId] = useState(null);

//   function handleHover(letterId) {
//     setHighlightedId(letterId);
//   }

//   function handleStar(starredId) {
//     setLetters(
//       letters.map((letter) => {
//         if (letter.id === starredId) {
//           return {
//             ...letter,
//             isStarred: !letter.isStarred,
//           };
//         } else {
//           return letter;
//         }
//       })
//     );
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul>
//         {letters.map((letter) => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={letter.id === highlightedId}
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }

// 도전4. 다중 선택 구현
import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
