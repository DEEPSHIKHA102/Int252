import React, { useState } from "react";

const PostDataComponent = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const postData = async () => {
        try {
            const response = await fetch('https://api.example.com/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: 'value' })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResponse(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };

    return (
        <>
            <h1>Post Data Component</h1>
            <button type="button" onClick={postData}>Submit</button>
            {response && <div>Response: {JSON.stringify(response)}</div>}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </>
    );
};

export default PostDataComponent;
