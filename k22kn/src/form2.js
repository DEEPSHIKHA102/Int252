import { useState} from "react";
export default function Addform(){
    const [inputs,setvar]=useState({})
    const onhandle=(e)=>{
        const name=e.target.name;
        const value = e.target.value;
        setvar(values=>({...values, [name]:value}))
    }
    const onsubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
    }
    return(
        <>
        <form onSubmit={onsubmit}>
        <label>Enter your name:
                <input type="text" name="username" value={inputs.username||" "} onChange={onhandle}></input>
            </label><br></br>
            <label>Enter your Age:
                <input type="number" name="age" value={inputs.age||" "} onChange={onhandle}></input>
            </label><br></br>
            <label>Enter your Gmail:
                <input type="gmail" name="email" value={inputs.email||" "} onChange={onhandle}></input>
            </label><br></br>
            <label>Enter your Password:
                <input type="password" name="password" value={inputs.password||" "} onChange={onhandle}></input>
            </label><br></br>
            <label>Discuss about yourself:
                <textarea name="descrive" value={inputs.descrive||" "} onChange={onhandle}></textarea>
            </label><br></br>
            <label>Select item</label>
            <select name="cars" value={inputs.cars||""} onChange={onhandle}>
                <option value="Ford">Ford</option>
                <option value="Toyta">toyta</option>
                <option value="Mahindra">mahindra</option>
            </select>
            <br></br>
            <input type="submit"></input>
        </form>
        </>
    )
}