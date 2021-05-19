import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { UserGames, Game } from "./Types/UserGames";

function App(): any {
  const [data, setData] = useState<Game[]>([]);

  const divStyle = {
    marginBottom: "10px",
  };

  // const [ data, setData ] = useState(null);
  async function fetchData() {
    const result = await axios("http://localhost:5000/leagues/getLeagues");
    const userGames = result.data as UserGames;
    console.log(userGames);
    setData(userGames.games);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  if (!data) return <h1>Hello World</h1>;

  return (
    <>
      {data
        .slice(0)
        .reverse()
        .map((item, i) => (
          <Row key={i} style={divStyle}>
            <Card>
              <Card.Header>
                {item.leagues[0][0].name} - {item.season}
              </Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
    </>
  );
}
export default App;
