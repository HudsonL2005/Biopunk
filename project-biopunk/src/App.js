import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Informacoes from './pages/informacoes/informacoes.js';
import Personagens from './pages/personagens/personagens.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criacao' element={<Criacao_de_Personagem />} />
        <Route path='/personagens' element={<Personagens />} />
        <Route path='/informacoes' element={<Informacoes/>}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
