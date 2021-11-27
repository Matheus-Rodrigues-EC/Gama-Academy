import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Views/Home';
import Consulta from './Views/Consulta';
import AddCurso from './Views/AddCurso';
import VerCursos from './Views/VerCursos';

const Routers: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/consulta" element={<Consulta/>} />
                <Route path="/adicionar+curso" element={<AddCurso/>} />
                <Route path='/pesquisar+cursos' element={<VerCursos />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Routers;