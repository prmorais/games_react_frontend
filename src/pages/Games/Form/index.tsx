import React, {ChangeEvent, useState} from "react";
import {useHistory} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";

import './index.css'
import apiConfig from "../../../services/apiConfig";

interface Game {
   title: string;
   platform: string;
}

const FormGame: React.FC = () => {

   const [model, setModel] = useState<Game>({
      title: '',
      platform: ''
   });

   const history = useHistory();

   function updateModel(e: ChangeEvent<HTMLInputElement>) {
      setModel({
         ...model,
         [e.target.name]: e.target.value
      });
   }

   async function onSave(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();

      const response = await apiConfig.post('/games', model);
      console.log(response);
   }

   function goBack() {
      history.goBack();
   }

   return (
      <div className='container'>
         <br/>
         <div className="game-header">
            <h1>New Game</h1>
            <Button onClick={goBack} size='sm' variant='outline-success'>Voltar</Button>
         </div>
         <br/>
         <div className='container'>
            <Form onSubmit={onSave}>
               <Form.Group>
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                     type="text"
                     name='title'
                     onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                     placeholder="Entre com o título"/>
               </Form.Group>

               <Form.Group>
                  <Form.Label>Plataforma</Form.Label>
                  <Form.Control
                     type="text"
                     name='platform'
                     onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                     placeholder="Entre com a plataforma"/>
               </Form.Group>
               <Button variant="outline-primary" type="submit">
                  Salvar
               </Button>
            </Form>
         </div>
      </div>
   );
};

export default FormGame;
