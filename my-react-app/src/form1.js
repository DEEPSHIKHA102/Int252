import { useState } from "react";
export default function Addform(){
    const [name, SetName]=useState(" ")
    const [age, SetAge]=useState(" ")
    const [password, SetPassword] = useState(" ")
    const [file, SetFile] = useState(" ")
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`The entered name is ${name} and age is ${age} and password ${password}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text" value={name} onChange={(e)=>SetName(e.target.value)}></input>
            </label><br></br>
            <label>Enter your age:
                <input type="number" value={age} onChange={(e)=>SetAge(e.target.value)}></input>
            </label><br></br>
            <label>Enter your password:
                
                <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)}></input>
            </label><br></br>
            <label>Enter Any file:
                <input type="file" value={file} onChange={(e)=>SetFile(e.target.value)}></input>
            </label><br></br>
            <input type="submit"></input>
        </form>
    )
}