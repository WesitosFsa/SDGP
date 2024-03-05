import React from 'react';
import './css/index.css';
import imagen1 from './images/inicio1.jpg';
import imagen2 from './images/inicio2.png';


function SistemaGestionProyectos() {
  return (
    <div>
      <div className="card p-3 mb-2 bg-primary text-white">

        <div className="card-header" >
        <center>SDGP </center>
        </div>
        <div className="card-body">
          <h5 className="card-title"><center>- Sistema de Gestión de Proyectos - </center></h5>
          <p className="card-text"><center> Gestiona tus proyectos de manera sencilla</center></p>
          <center>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary p-3 mb-2 bg-white text-dark" onClick={() => window.location.href='/inicio'}>Iniciar Sesión</button>
          <button type="button" className="btn btn-primary p-3 mb-2 bg-white text-dark" onClick={() => window.location.href='/crearcuenta'}>Crear Cuenta</button>
          <button type="button" className="btn btn-primary p-3 mb-2 bg-white text-dark" onClick={() => window.location.href='/informacion'}>Soporte</button>

            </div>
          </center>
        </div>
      </div>
      <main>
        <nav>
          <div className="row cabeza">
            <div className="col">
              <img  className="rounded float-start" src={imagen1} alt="Imagen 1" /> {/* Utiliza la imagen importada */}
            </div>
            <div className="col">
              <img  className="rounded float-end"  src={imagen2} alt="Imagen 1" /> {/* Utiliza la imagen importada */}
            </div>
          </div>
        </nav>
        <div className="d-grid gap-2">
          <button onClick={() => window.location.href='/inicio'} className="btn btn-primary" type="button">Iniciar Sesión</button>
          <button onClick={() => window.location.href='/crearcuenta'} className="btn btn-primary" type="button">Crear Cuenta</button>
        </div>


        <br />

      </main>
    </div>
  );
}

export default SistemaGestionProyectos;
