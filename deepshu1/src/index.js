// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // const element = <h1>React is {5+5} times better with JSX</h1>
// // const element = React.createElement('div', null, 'Hello World');
// const name = 'Deepshu';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.Fragment>
//   <h1>Hello {name}</h1>
//   <p>I am learning React js</p>
// </React.Fragment>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import {add} from './Math.js';
import {sub} from './Math.js';
import {mul} from './Math.js';
import {div} from './Math.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const element = <h1>React is {5+5} times better with JSX</h1>
// const element = React.createElement('div', null, 'Hello World');
// const name = 'Ujjwal';
// function Message() {
//   return <div>Welcome in React framework</div>
// }
// const element = React.createElement(Message, null);
ReactDOM.render(
  <add>{add(5,5)}</add>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <table border={1}>
//       <th>Name</th>
//       <th>Age</th>
//       <td>{name}</td>
//       <td>20</td>
//   </table>
// );
// root.render(element);
// root.render(
  // <input type='text' placeholder='Enter your name' />
  // <div>
  //   <h2>React Class</h2>
  //   <p>I am learning React </p>
  //   <address>LPU Campus</address>
  // </div>
  // element
  // <ol>
  //   <li>CSE</li>
  // </ol>
  // <ul>
  //   <li>CSE</li>
  // </ul>

// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
// {/* <React.Fragment>
//   <h1>Hello {name}</h1>
//   <p>I am learning React </p>
// </React.Fragment> */}