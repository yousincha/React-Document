// //배열에 추가하기
// import { useState } from "react";

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// //배열에서 제거하기
// import { useState } from "react";

// let initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// export default function List() {
//   const [artists, setArtists] = useState(initialArtists);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>
//             {artist.name}{" "}
//             <button
//               onClick={() => {
//                 setArtists(artists.filter((a) => a.id !== artist.id));
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// //배열 변경하기
// import { useState } from "react";

// let initialShapes = [
//   { id: 0, type: "circle", x: 50, y: 100 },
//   { id: 1, type: "square", x: 150, y: 100 },
//   { id: 2, type: "circle", x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(initialShapes);

//   function handleClick() {
//     const nextShapes = shapes.map((shape) => {
//       if (shape.type === "square") {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Move circles down!</button>
//       {shapes.map((shape) => (
//         <div
//           key={shape.id}
//           style={{
//             background: "purple",
//             position: "absolute",
//             left: shape.x,
//             top: shape.y,
//             borderRadius: shape.type === "circle" ? "50%" : "",
//             width: 20,
//             height: 20,
//           }}
//         />
//       ))}
//     </>
//   );
// }

// // 배열에서 항목 교체하기
// import { useState } from "react";

// let initialCounters = [0, 0, 0];

// export default function CounterList() {
//   const [counters, setCounters] = useState(initialCounters);

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button
//             onClick={() => {
//               handleIncrementClick(i);
//             }}
//           >
//             +1
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// //배열에 삽입하기
// import { useState } from "react";

// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState(initialArtists);

//   function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//       // Items before the insertion point:
//       ...artists.slice(0, insertAt),
//       // New item:
//       { id: nextId++, name: name },
//       // Items after the insertion point:
//       ...artists.slice(insertAt),
//     ];
//     setArtists(nextArtists);
//     setName("");
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleClick}>Insert</button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// //배열에 다른 변경사항 적용하기
// import { useState } from "react";

// let nextId = 3;
// const initialList = [
//   { id: 0, title: "Big Bellies" },
//   { id: 1, title: "Lunar Landscape" },
//   { id: 2, title: "Terracotta Army" },
// ];

// export default function List() {
//   const [list, setList] = useState(initialList);

//   function handleClick() {
//     const nextList = [...list];
//     nextList.reverse();
//     setList(nextList);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Reverse</button>
//       <ul>
//         {list.map((artwork) => (
//           <li key={artwork.id}>{artwork.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//Immer로 간결한 업데이트 로직 작성하기
// import { useState } from "react";
// import { useImmer } from "use-immer";

// let nextId = 3;
// const initialList = [
//   { id: 0, title: "Big Bellies", seen: false },
//   { id: 1, title: "Lunar Landscape", seen: false },
//   { id: 2, title: "Terracotta Army", seen: true },
// ];

// export default function BucketList() {
//   const [myList, updateMyList] = useImmer(initialList);
//   const [yourList, updateYourList] = useImmer(initialList);

//   function handleToggleMyList(id, nextSeen) {
//     updateMyList((draft) => {
//       const artwork = draft.find((a) => a.id === id);
//       artwork.seen = nextSeen;
//     });
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     updateYourList((draft) => {
//       const artwork = draft.find((a) => a.id === artworkId);
//       artwork.seen = nextSeen;
//     });
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList artworks={myList} onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList artworks={yourList} onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map((artwork) => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={(e) => {
//                 onToggle(artwork.id, e.target.checked);
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// // 도전1. 장바구니 품목 업데이트 하기
// import { useState } from "react";

// const initialProducts = [
//   {
//     id: 0,
//     name: "Baklava",
//     count: 1,
//   },
//   {
//     id: 1,
//     name: "Cheese",
//     count: 5,
//   },
//   {
//     id: 2,
//     name: "Spaghetti",
//     count: 2,
//   },
// ];

// export default function ShoppingCart() {
//   const [products, setProducts] = useState(initialProducts);

//   function handleIncreaseClick(productId) {
//     setProducts(
//       products.map((product) => {
//         if (product.id === productId) {
//           return {
//             ...product,
//             count: product.count + 1,
//           };
//         } else {
//           return product;
//         }
//       })
//     );
//   }

//   function handleDecreaseClick(productId) {
//     let nextProducts = products.map((product) => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count - 1,
//         };
//       } else {
//         return product;
//       }
//     });
//     nextProducts = nextProducts.filter((p) => p.count > 0);
//     setProducts(nextProducts);
//   }

//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name} (<b>{product.count}</b>)
//           <button
//             onClick={() => {
//               handleIncreaseClick(product.id);
//             }}
//           >
//             +
//           </button>
//           <button
//             onClick={() => {
//               handleDecreaseClick(product.id);
//             }}
//           >
//             –
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

//도전2. Immer를 사용하여 변이 수정하기
import { useImmer } from "use-immer";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(initialTodos);

  function handleAddTodo(title) {
    updateTodos((draft) => {
      draft.push({
        id: nextId++,
        title: title,
        done: false,
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    updateTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    updateTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
