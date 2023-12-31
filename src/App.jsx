import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route desde react-router-dom
import Index from './Paginas/Index';
import Formulario from './Paginas/Formulario';
import Login from './Paginas/Login';
import Dashboard from './Paginas/Dashboard';
import Editform from './Paginas/Editform';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/Formulario" element={<Formulario/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/edit/:id' element={<Editform/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
