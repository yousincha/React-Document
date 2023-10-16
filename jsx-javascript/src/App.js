// export default function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/7vQD0fPs.jpg"
//       alt="Gregorio Y. Zara"
//     />
//   );
// }

// export default function TodoList() {
//   const name = 'YOUGOD';
//   return (
//     <h1>{name}'s To Do List</h1>
//   );
// }

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'short', year: '2-digit', month:'2-digit', day:'numeric' }
//   ).format(date);
// }

// function Component({children}){
//   return <div>HIHIHI {children} </div>
// }

// export default function TodoList() {
//   const H1 = Component;

//   return (
//     <H1><br />To Do List for {formatDate(today)}</H1>
//   );
// }

// const person = {
//   name: 'Barbie',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// function TodoList({person: {name, theme}}) {
//   return (
//     <div style={theme}>
//       <h1>{name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230612_288%2F1686535206963s8N1N_JPEG%2Fmovie_image.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// export default function App(){
//   return (
//    <TodoList person={person} />
//   )
//  }

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
