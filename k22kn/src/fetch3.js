//fetch put
import React, { useState } from "react";

const PutDataComponent = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const putData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: 'updatedValue' })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResponse(data);
            setError(null);
        } catch (error) {
            setError(error);
            setResponse(null);
        }
    };

    return (
        <>
            <h1>Put Data Component</h1>
            <button type="button" onClick={putData}>Send PUT Request</button>
            {response && <pre>Response: {JSON.stringify(response,null,2)}</pre>}
            {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
        </>
    );
};

export default PutDataComponent;
