import { useRef } from "react";
export default function Addform(){
    const inputRef = useRef(null);
    function handleSubmit(){
        alert(inputRef.current.value);
    }
    return(
        <>
        <h3>Uncontrolled Component</h3>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" ref={inputRef}/>
            <br></br>
            <label>Email: </label>
            <input type="email" name="email" ref={inputRef}/>
            <br></br>
            <label>Password: </label>
            <input type="password" name="password" ref={inputRef}/>
            <br></br>
            <button type="submit">Submit</button>

        </form>
        </>
    )
}