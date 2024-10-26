import React, { useState } from "react";

function Addition() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [sum, setSum] = useState(null);

    const handleAddition = () => {
        const total = parseFloat(firstNumber) + parseFloat(secondNumber);
        setSum(total);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Simple Addition App</h2>
            <form>
                <label>
                    First Number:
                    <input
                        type="text"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Second Number:
                    <input
                        type="text"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleAddition}>
                    Add
                </button>
            </form>
            {sum !== null && (
                <h3>Result: {sum}</h3>
            )}
        </div>
    );
}

export default Addition;
