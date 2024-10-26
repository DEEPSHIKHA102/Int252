//import React from 'react';
//import './App.css';
//import React,{Component} from 'react';
//import FormComponent from './components/FormComponent';  // Adjust the path if necessary//1

// ==============================================================================================================

// import React, {useState} from 'react';
// const Statefull = ()=>{
//   const [count,setCount]=useState(0);
//   const handleClick=()=>{
//     setCount(count+1);
//   };

//   return(
//     <div>
//       <h1>Button cliked{count} times</h1>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default Statefull;
// =================================================================================================================


//function App() {//import React from 'react';
  // return (//1
  //   <div className="App">
  //     <h1>Welcome to React App</h1>
  //     <FormComponent />
  //     <button onClick={()=> handleClick('this is imporatnt msg from my side')}>click here</button>
  //   </div>
  // );
  //  ........................................
  // const x = (message) => {
  //   alert(message);
  // };
  // return(
  //   <button onClick={()=> x('this is imporatnt msg from my side')}>click here</button>
  // );
  

  //  ........................................
  //  const y = (event)=>{
  //   event.persist();
  //   setTimeout(() => {
  //     console.log(event.type);
  //   },1000);
  //  };
  //  return(
  //   <button onClick={y}>Click here</button>
  //  )
//}

// class App extends Component{ //import React,{Component} from 'react';
//   constructor(props){
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     alert('button clicked');
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>click here</button>
//     );
//   }
// }
// export default App;

/// ===========================================================================================

import Addform from "./form1";

function App() {
  return(
    <>
    <Addform/>
  
    </>
  );
  
}
export default App;