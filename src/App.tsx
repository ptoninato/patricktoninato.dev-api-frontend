import React, { useState, useEffect } from "react";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { UserGames, Game } from './Types/UserGames'

function App(): any {

    const [ data, setData ] = useState<Game []>([]);


    // const [ data, setData ] = useState(null);
    async function fetchData() {
        const result = await axios('http://localhost:5000/leagues/getLeagues');
        const userGames = result.data as UserGames;
        setData(userGames.games)
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    if (!data) return <h1>Hello World</h1>

    return(
        <>
            {data.map((item, i) => (
                <Row key={i}>
                    <Card>
                    <Card.Header>{item.season}</Card.Header>
                    <Card.Body>
                        <Card.Title>Test</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Row>
            ))}
        </>
    )
}
export default App