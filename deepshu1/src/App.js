// 

// import React, { useState, useMemo } from 'react';

// function App(num) {
//   return num * 2;
// }

// function Hook() {
//   const [count, setCount] = useState(20);

//   const doubleCount = useMemo(() => {
//     return App(count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Double Count: {doubleCount}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// }

// export default Hook;
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const Hook11 = () => {
 const [data, setData] = useState(null);
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => setData(data));
}, []);
return (
 <>
  {data &&
data.map((item) => {
 return <p key={item.id}>{item.title}</p>;
   })}
   </>
   );
  };
  export default Hook11;
  