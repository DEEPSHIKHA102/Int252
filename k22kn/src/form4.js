import { useState} from "react";

export default function Addform(){
    const [email, setemail] = useState("");
    const [error, setError] = useState("");
    const handle=(e)=>{
        setemail(e.target.value)
        setError('')
    }
    const validate=()=>{
        const check=/^\S+@\S+\.\S+$/
        if(!email){
            setError("Email is required")
            return false;
        }
        else if(!check.test(email)){
            setError("enter valid email")
            return false;
        }
        else{
            setError('');
            return true;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const val = validate()
        if(val){
            alert(`Email submitted: ${email}`);
            setemail('');
        }
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={handle}/>
            <button type="submit">Submit</button>
            {error && <p>{error}</p>}

        </form>
        </>
    )
}