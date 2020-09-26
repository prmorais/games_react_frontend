import React, {ChangeEvent, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";

import './index.css'
import apiConfig from "../../../services/apiConfig";

interface Game {
   title: string;
   platform: string;
}

const FormGame: React.FC = () => {

   const history = useHistory();
   const {id} = useParams();
   const [model, setModel] = useState<Game>({
      title: '',
      platform: ''
   });

   useEffect(() => {
      if (id !== undefined) {
         findGame(id);
      }
   }, [id]);


   function updateModel(e: ChangeEvent<HTMLInputElement>) {
      setModel({
         ...model,
         [e.target.name]: e.target.value
      });
   }

   async function onSave(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();

      if (id !== undefined) {
         await apiConfig.put(`/games/${id}`, model);
      } else {
         await apiConfig.post('/games', model);
      }

      goBack();
   }

   async function findGame(id: string) {
      const response = await apiConfig.get(`games/${id}`);
      setModel({
         title: response.data.title,
         platform: response.data.platform
      });
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
                     value={model.title}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                     placeholder="Entre com o título"/>
               </Form.Group>

               <Form.Group>
                  <Form.Label>Plataforma</Form.Label>
                  <Form.Control
                     type="text"
                     name='platform'
                     value={model.platform}
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
