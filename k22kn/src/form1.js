import { useState } from "react";
export default function Addform() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The entered name is ${name}, age is ${age}, and password is ${password}`);
        if (file) {
            alert(`File name: ${file.name}`);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Capture the file object
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />

            <label>
                Enter your age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <br />

            <label>
                Enter your password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />

            <label>
                Upload a file:
                <input type="file" onChange={handleFileChange} />
            </label>
            <br />

            <input type="submit" value="Submit" />
        </form>
    );
}
