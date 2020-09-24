import React from "react";
import {Button} from "react-bootstrap";

import './index.css'

interface Game {
    id: number;
    title: string;
    platform: string;
}

const FormGame: React.FC = () => {
    return (
        <div className='container'>
            <br/>
            <div className="game-header">
                <h1>New Game</h1>
                <Button size='sm' variant='outline-success'> Voltar</Button>
            </div>
            <br/>
        </div>
    );
};

export default FormGame;