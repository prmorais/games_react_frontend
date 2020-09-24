import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import apiConfig from "../../services/apiConfig";

interface Game {
    id: number;
    title: string;
    platform: string;
}

const Games: React.FC = () => {

async function loadGames() {
    const response = await apiConfig.get('/games');
    setGames(response.data);
}
const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        loadGames();
    }, []);

    return <div className='container'>
        <h1>Games Page</h1>
        <br/>

        <Table striped bordered hover className='text-center'>
            <thead>
            <tr>
                <th>#</th>
                <th>Título</th>
                <th>Plataforma</th>
            </tr>
            </thead>
            <tbody>
            { games.map(game => (
                <tr key={ game.id }>
                    <td>{ game.id }</td>
                    <td>{ game.title }</td>
                    <td>{ game.platform }</td>
                </tr>
            ))};
            </tbody>
        </Table>
    </div>
};

export default Games;
