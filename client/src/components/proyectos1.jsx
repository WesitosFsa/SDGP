import React, { useState, useEffect } from 'react'; 
import Axios from 'axios'; // Importa Axios para realizar solicitudes HTTP

const Proyectos1 = () => {
  const [proyectos, setProyectos] = useState([]);

  // Función para cargar los proyectos desde el servidor cuando se hace clic en "Visualizar Proyectos"
  const cargarProyectos = () => {
    Axios.get("http://localhost:3001/proyectos")
      .then((response) => {
        setProyectos(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los proyectos:", error);
      });
  };

  // Llama a cargarProyectos al montar el componente
  useEffect(() => {
    cargarProyectos();
  }, []); // El segundo parámetro [] indica que se ejecutará solo una vez al montar el componente

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SDGP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/usuario">Cuenta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/proyectos">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={cargarProyectos}>Visualizar Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/colaboradores">Colaboradores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className='wesos2'>
        <h1>SDGP - Sistema de Gestión de Proyectos</h1>
        <h2>Proyectos</h2>

        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre Proyecto</th>
              <th scope="col">Estado del Proyecto</th>
              <th scope="col">Actualizaciones del Proyecto</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proyecto, index) => (
              <tr key={proyecto.idproyecto}>
                <th scope="row">{index + 1}</th>
                <td>{proyecto.nombreproyecto}</td>
                <td>{proyecto.estadodelproyecto}</td>
                <td>{proyecto.actualizacionesdelproyecto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Proyectos1;
