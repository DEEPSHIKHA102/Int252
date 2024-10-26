import { useState} from "react";
export default function Addform() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const change = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [inputName]: value }));
    setError("");
  };

  const validate = () => {
    const emailCheck = /^\S+@\S+\.\S+$/; // Regex for email validation
    const pwd1 = /^[A-Za-z0-9]+$/;
    const { email, pwd } = inputs; // Destructure inputs
    if (!email || !pwd) {
      setError("Please fill in both email and password");
      return false;
    } else if (!emailCheck.test(email)) {
      // Use .test() for regex validation
      setError(
        "Please enter a valid email address or email length should be more than 15"
      );
      return false;
    } else if (pwd.length < 6 || !pwd1.test(pwd)) {
      // Check password length
      setError(
        "Password must be at least 6 characters long and should contain alphanumeric"
      );
      return false;
    } else {
      setError(""); // Clear error if valid
      return true;
    }
  };

  const sub = (e) => {
    e.preventDefault();
    const isValid = validate(); // Call validate and get the result
    if (isValid) {
      // Check if the form is valid
      alert("Validated");
      setInputs({}); // Reset inputs
    }
  };

  return (
    <>
      <form onSubmit={sub}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={change}
        />{" "}
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="pwd"
          value={inputs.pwd || ""}
          onChange={change}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>} {/* Display error message */}
      </form>
    </>
  );
}
