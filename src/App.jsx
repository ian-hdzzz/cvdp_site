import { useState } from 'react'
import Navbar from "../src/components/navbar";
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Importar el componente Home
import Asesoria from './pages/asesoria.jsx';
import Practicas from './pages/practicas.jsx';
import Empresa from './pages/empresas.jsx';
import Recursos from './pages/recursos.jsx';
import Challenge from './pages/challenge.jsx';
import Conocenos from './pages/conocenos.jsx';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/asesorias" element={<Asesoria />} />
            <Route path="/practicas" element={<Practicas />} />
            <Route path="/empresas" element={<Empresa />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/conocenos" element={<Conocenos />} />
          </Routes>
      </div>
      </>

  )
}

export default App
