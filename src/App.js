import DarkLight from "./hw/dark-light/Dark-light";
import Water from "./hw/water/Water";
import Quotes from "./hw/quotes/Quotes";
import Hello from "./hw/HelloWorld/HelloWorld";
// import Todo from "./hw/todo-first/todoComponent";
import TodoComponent from "./hw/todo-first/todoItems";

function General () {
  return(
    <>
      <DarkLight />
      <Water />
      <Quotes />
      <Hello />
      {/* <Todo /> */}
      <TodoComponent/>
    </>
  )
}

export default General;

// import Menu from "./Menu";

// function App() {
//   return (
//     <>
//     <h1>Navigation menu</h1>
//     <Menu />
//     </>
//   );
// }

// export default App;




// import React from "react";

// class App extends React.Component{
//   constructor(props){
//     super(props)

//     this.state={
//       username: "Vasya"
//     }
//   }

//     handleInputChange(username){
//       this.setState({username})
//     }

//     render(){
//       const {username} = this.state;

//       return(
//         <>
//           <div>
//             <input
//               type="text"
//               value={username}
//               onChange={event => {
//                 this.handleInputChange(event.target.value);
//               }}
//             />  
//           </div>
  
//           <p>Your name is {username}</p>
//         </>
//       )
//     };
// }     

// export default App;