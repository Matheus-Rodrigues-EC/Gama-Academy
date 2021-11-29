import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCurso from './pages/AddCurso';
import Consulta from './pages/Consulta';
import VerCursos from './pages/VerCursos';


function Routers() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/consulta' element={<Consulta/>} />
            <Route path='/adicionar+curso' element={<AddCurso />} />
            <Route path='/pesquisar+cursos' element={<VerCursos />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Routers;