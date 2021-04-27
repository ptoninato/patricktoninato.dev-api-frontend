import React, { useState, useEffect } from "react";
import axios from 'axios';

function App(): any {

    const [ data, setData ] = useState([]);


    // const [ data, setData ] = useState(null);
    async function fetchData() {
        const result = await axios('http://localhost:5000/leagues/getLeagues');
        setData(result.data.games)
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    if (!data) return <h1>Hello World</h1>

    return(
        <div>
            {data.map((item, i) => (
                <h1 key={i}>{item['game_key']}</h1>
            ))}
        </div>
    )
}
export default App