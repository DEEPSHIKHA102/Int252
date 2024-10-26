//fetch get
import React, {useEffect, useState} from "react";
const FetchDataComponent = () =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data=>{
            setData(data);
            setLoading(false);
        })
        .catch(error =>{
            setError(error);
            setLoading(false);
        });
    }, []);
    if(loading) return <p>Loading....</p>;
    if(error) return <p>Error: {error.message}</p>;
    
    return(
        <>
        <h1>Fetch Data Component</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};
export default FetchDataComponent;