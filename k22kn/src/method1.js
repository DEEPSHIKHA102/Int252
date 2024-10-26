import React, { useState, useEffect } from "react";
import axios from "axios";

const GetDataComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Get Data Component</h1>
            {data ? (
                <div>Data: {JSON.stringify(data)}</div>
            ) : (
                <div>Loading...</div>
            )}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </>
    );
};

export default GetDataComponent;








