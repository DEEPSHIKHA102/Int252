//fetch delete
import React, { useState } from "react";

const DeleteDataComponent = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const deleteData = async () => {
        try {
            const response = await fetch('https://api.example.com/data/1', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResponse(data);
            
        } catch (error) {
            setError(error);
            setError(null);
        }
    };

    return (
        <>
            <h1>Delete Data Component</h1>
            <button type="button" onClick={deleteData}> SendDelete Request</button>
            {response && <div>Response: {JSON.stringify(response,null,2)}</div>}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </>
    );
};

export default DeleteDataComponent;
