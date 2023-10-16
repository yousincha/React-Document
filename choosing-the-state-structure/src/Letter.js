// export default function Letter({
//   letter,
//   isHighlighted,
//   onHover,
//   onToggleStar,
// }) {
//   return (
//     <li
//       className={isHighlighted ? "highlighted" : ""}
//       onFocus={() => {
//         onHover(letter.id);
//       }}
//       onPointerMove={() => {
//         onHover(letter.id);
//       }}
//     >
//       <button
//         onClick={() => {
//           onToggleStar(letter.id);
//         }}
//       >
//         {letter.isStarred ? "Unstar" : "Star"}
//       </button>
//       {letter.subject}
//     </li>
//   );
// }

export default function Letter({ letter, onToggle, isSelected }) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
