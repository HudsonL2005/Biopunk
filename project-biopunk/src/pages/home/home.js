import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import style from '../../style/coisa.css'
import criacao_de_personagens from '../criacao_de_personagem/Criacao_de_personagem';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <><h1>Menu</h1>
    <div class="botoesContainer">
      <Link to="/criacao_de_personagens">
        <button onClick={criacao_de_personagens} id='criacao_de_personagens'>Criação de personagens</button>
      </Link>
      <Link to="/personagens">
        <button id= "personagem_butao">Personagens</button>
      </Link>
      <Link to="/informacoes">
      <button id= "informacoes_butao">Informações</button>
      </Link>
      
    </div></>
    
  );
}

export default Home;
