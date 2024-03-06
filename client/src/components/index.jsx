import React from 'react';
import './css/index.css';
import imagen1 from './images/inicio1.jpg';
import imagen2 from './images/inicio2.png';


function SistemaGestionProyectos() {
  return (
    <div className="contenedor">
    <style>
      {`
        .contenedor body {
          /* Estilos específicos para el body dentro del componente SistemaGestionProyectos */
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center; /* Centrar horizontalmente */
          align-items: center; /* Centrar verticalmente */
          min-height: 100vh;
        }
      `}
    </style>
    <div>
      <div className="card p-3 mb-2 bg-primary text-white custom-footer">
      <div className="card-header text-center">SDGP</div>
      <div className="card-body text-center">
        <h5 className="card-title">- Sistema de Gestión de Proyectos -</h5>
        <p className="card-text">Gestiona tus proyectos de manera sencilla</p>
        <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-info " onClick={() => window.location.href='/inicio'}>Iniciar Sesión</button>
            <button type="button" className="btn btn-info " onClick={() => window.location.href='/crearcuenta'}>Crear Cuenta</button>
            <button type="button" className="btn btn-info " onClick={() => window.location.href='/informacion'}>Soporte</button>
        </div>
      </div>
    </div>
      <main>
        <nav>
          <div className="row cabeza">
            <div className="col">
              <img className="rounded float-start" src={imagen1} alt="Imagen 1" /> {/* Utiliza la imagen importada */}
            </div>
            <div className="col">
              <img className="rounded float-end" src={imagen2} alt="Imagen 1" /> {/* Utiliza la imagen importada */}
            </div>
          </div>
        </nav>
       
        <br />
      </main>
      <footer>
         <div className="d-grid gap-2">
          <button onClick={() => window.location.href='/inicio'} className="btn btn-primary" type="button">Iniciar Sesión</button>
          <button onClick={() => window.location.href='/crearcuenta'} className="btn btn-primary" type="button">Crear Cuenta</button>
        </div>

      </footer>
    </div>
    </div>
  );
}
export default SistemaGestionProyectos;
