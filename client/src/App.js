import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdministradorUsuarios from './components/administrador';
import InformacionUsuarios from './components/colaboradores';
import LoginPage from './components/inicio';
import Crearcuenta from './components/crearcuenta';
import SistemaGestionProyectos from './components/index';
import SoporteTecnico from './components/informacion'
import Proyectos from './components/proyectos2';
import Proyectos1 from './components/proyectos1';
import Usuario from './components/usuario';
import VisualizarProyectos from './components/visualizarproyectos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<SistemaGestionProyectos />} /> {/* Página principal */}
          <Route path="/administrador" element={<AdministradorUsuarios />} /> 
          <Route path="/colaboradores" element={<InformacionUsuarios />} /> 
          <Route path="/crearcuenta" element={<Crearcuenta />} /> 
          <Route path="/index" element={<SistemaGestionProyectos />} /> 
          <Route path="/informacion" element={<SoporteTecnico />} /> 
          <Route path="/inicio" element={<LoginPage />} /> {/* Página de inicio de sesión */}
          <Route path="/proyectos" element={<Proyectos />} /> {/* Página de inicio de sesión */}
          <Route path="/proyectosuser" element={<Proyectos1 />} /> {/* Página de inicio de sesión */}
          <Route path="/usuario" element={<Usuario />} /> {/* Página de inicio de sesión */}
          <Route path="/visualizar" element={<VisualizarProyectos />} /> {/* Página de inicio de sesión */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;