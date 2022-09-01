import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './paginas/Start'
import Inicio from './paginas/Inicio'
import PaginaPokemon from './paginas/PaginaPokemon'
import "@fontsource/poppins";
import Login from './paginas/Login';
import FormularioPokemon from './paginas/Formulario';


function App() {


  return (
    <div className='w-full letra  m-auto h-full'>
   <BrowserRouter>
    <Routes>
         <Route 
       path='/'
       element={<Start 
       
       />}
      />
      <Route 
       path='/Login'
       element={<Login 
       />}
      />
          <Route 
       path='/Inicio'
       element={<Inicio 
       
       />}
      />
          <Route 
       path='/PaginaPokemon/:id'
       element={<PaginaPokemon
       
       />}
      />
      <Route 
       path='/FormularioPokemon/'
       element={<FormularioPokemon
       />}
      />
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
