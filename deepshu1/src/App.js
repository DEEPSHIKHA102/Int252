import logo from './logo.svg';
import './App.css';
import {add,sub,mul,div} from './math';
// var a = 30; // Global variable


/*
function App() {
  
     var b= 20; //local variable
     const c = 10;
     const add = (x,y) => {
      return (x+y);
    }
     const mul = (x,y,z) => {
      return (x*y*z);
     }
    const msg = () =>
    {
      return ("Helloooo world!");
    }
    const celcius = (f) =>{
      return ((f-32)*5)/9;
    }

    class Student{
      constructor(name, age){
        this.name=name;
        this.age=age;
      }
    }
    var str1=new Student("Deepshikha", 20);
    var str2=new Student("Shikha", 21); //creating object for class



    class Animal{
      eat=()=>{
        return ("Eatiiiiing.....");
      }
    }
    class Dog extends Animal{
      bark=()=>{
        return ("barkiiiiiiiiiiiing.....");
      }
    }
    class Babydog extends Dog{
      weep=()=>{
        return ("weeping.....");
      }
    }

     var d=new Babydog();
return(
  <>
  <p>The value of a is: {a}</p>
  <p>The value of b is: {b}</p>
  <p>The sum of a,b and c is: {a+b+c}</p>
  <p>The sum of a amd b is: {a+b}</p>
  <p>The out of add function is: {add(b,c)}</p>
  <p>The out of msg function is: {msg()}</p>
  <p>The out of add function is: {mul(52,13,69)}</p>
  <p>The out of add function is: {mul(a,b,c)}</p>
  <p>THe celcius value of f is:{celcius(52)}</p>
  <p>The name of student: {str1.name} and age is: {str1.age}</p>
  <p>The name of student: {str2.name} and age is: {str2.age}</p>
  <p>Animal behavior: {d.eat()}, {d.bark()}, {d.weep()}</p>

  
  </>
);
}

*/

//***========================================

/*

function App() {
  class Parent{
    message()
    {
      return ("This is parent class function ");
    }
  
  }
  class Child extends Parent{
    meassage()
    {
      return ("This is child class .............");
    }
  
  supershow()
  {
    return super.message();
  }
}
  var ob=new Child();

  return(
    
    <>
      <p>The valude of show method is : {ob.meassage()}</p>
      <p>The value of show method : {ob.supershow()}</p>
    </>
    
   
);
}
*/

//***+================================= 

/*
function App() {
  class Student{
    static add(x,y)
    {
      return (x+y)
    }
    static sub(x,y)
    {
      return (x-y)
    }
    static mul(x,y)
    {
      return (x*y)
    }
  }  
  return(
    
    
    <>
      <p>The value of sum is:{Student.add(100,34)}</p>
      <p>The value of sub is:{Student.sub(100,34)}</p>
      <p>The value of mul is:{Student.mul(100,34)}</p>
    </>
    
);
}

*/


//**=========================================

/*
function App() {

  var abc = ["deepshi","anshi","ankur","arjun"];
  var abcd = [1,2,3,4];
  var x=abcd.map(Math.sqrt);

  const  sum = (a,b,c,d) =>
  {
    return (a+b+c+d);
  }
  
  return(
 <>
    <p>the value of array abc is : {abc.join(" , ")}</p>
    <p>the value of array abcd is : {x.join(", ")}</p>
    <p>the value of array abcd is : {sum(1,3,2,4)}</p>
    </>
);
}


*/
//***========================================== 

/*

function App() {

  var abc = [1,2,3,4];
  var abcd = [...abc,5,6,7,8,45];
  var mul = (a,b,c,d)=>
  {
    return (a*b*c*d);
  }
  
  var x = mul(...abc);
  return(
 <>
    <p>the value of x is : {(x)}</p>
    <p>the value of array abcd isis : {(abcd)}</p>
    <p>the value of array abcd isis : {(abcd.join(","))}</p>
    </>
);
}

*/

//===============================================================
/*
function App(){
  var a = [1,2,3,4];
  var b = [...a,5,6,7,8,45];
  const square=(a)=>
  {
    return(a*a);
  }
  const time=(a)=>
    {
      return(10*a);
    }
  const sum = (a,b,c,d) =>{
    return (a+b+c+d);
  }
  const student = 
  {
    name:"Deepshikha",
    email:"paldeepshukha@gmail.com",
    age:22,
    add:"LPU CAMPUS"
  }
  let {email,add}=student;
  return(
 <>
    <p>the value of a is : {(a.join(','))}</p>
    <p>the value of b is : {(b.join(','))}</p>
    <p>The sum of a the: {sum(...a)}</p>
    
    </>
);
  
}
*/

function App(){
  return(
    <>
    <p>The sum of any two no is: {add(3,4)}</p>
    <p>The sub of any two no is: {sub(3,4)}</p>
    <p>The mul of any two no is: {mul(3,4)}</p>
    <p>The div of any two no is: {div(3,4)}</p>
    </>
  );
}
export default App;
