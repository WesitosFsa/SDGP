import React, { useState, useEffect } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Proyectos() {

  const [proyectos, setProyectos] = useState([]);
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [estadoProyecto, setEstadoProyecto] = useState('');
  const [actualizacionProyecto, setActualizacionProyecto] = useState('');

  const [editar, setEditar] = useState(false);
  const [idProyecto, setIdProyecto] = useState('');

  const addProyecto = () => {
    Axios.post("http://localhost:3001/create", {
      nombreProyecto: nombreProyecto,
      estadoProyecto: estadoProyecto,
      actualizacionesProyecto: actualizacionProyecto,
    }).then(() => {
      getProyectos();
      limpiarCampos();
    });
  }

  const updateProyecto = () => {
    Axios.put("http://localhost:3001/update", {
      idProyecto: idProyecto,
      nombreProyecto: nombreProyecto,
      estadoProyecto: estadoProyecto,
      actualizacionesProyecto: actualizacionProyecto,
    }).then(() => {
      getProyectos();
      limpiarCampos();
    });
  }
  const limpiarCampos = ()=>{
    setNombreProyecto("");
    setEstadoProyecto("");
    setActualizacionProyecto("");
    setEditar(false);
  }
  const editarProyecto = (val) => {
    setEditar(true);
    setIdProyecto(val.idproyecto);
    setNombreProyecto(val.nombreproyecto);
    setEstadoProyecto(val.estadodelproyecto);
    setActualizacionProyecto(val.actualizacionesdelproyecto);
  }

  const eliminarProyecto = (id) => {
    // Aquí implementa la lógica para eliminar un proyecto utilizando Axios DELETE request
  }

  const getProyectos = () => {
    Axios.get("http://localhost:3001/proyectos").then((response) => {
      setProyectos(response.data);
    });
  }

  useEffect(() => {
    getProyectos();
  }, []);

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          Gestión de Proyectos
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text">Nombre Proyecto: </span>
            <input type="text" className="form-control" value={nombreProyecto} onChange={(event) => setNombreProyecto(event.target.value)} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Estado Proyecto: </span>
            <input type="text" className="form-control" value={estadoProyecto} onChange={(event) => setEstadoProyecto(event.target.value)} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Actualización Proyecto: </span>
            <input type="text" className="form-control" value={actualizacionProyecto} onChange={(event) => setActualizacionProyecto(event.target.value)} />
          </div>
        </div>
        <div className="card-footer">
          {editar ?
            <div>
              <button className='btn btn-warning m-2' onClick={updateProyecto}>Actualizar</button>
              <button className='btn btn-info m-2' onClick={() => setEditar(false)}>Cancelar</button>
            </div> :
            <button className='btn btn-success' onClick={addProyecto}>Registrar</button>
          }
        </div>
      </div>

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Proyecto</th>
            <th scope="col">Estado del Proyecto</th>
            <th scope="col">Actualizaciones del Proyecto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto, index) => (
            <tr key={proyecto.idproyecto}>
              <th scope="row">{index + 1}</th>
              <td>{proyecto.nombreproyecto}</td>
              <td>{proyecto.estadodelproyecto}</td>
              <td>{proyecto.actualizacionesdelproyecto}</td>
              <td>
                <button className="btn btn-info" onClick={() => editarProyecto(proyecto)}>Editar</button>
                <button className="btn btn-danger ml-2" onClick={() => eliminarProyecto(proyecto.idproyecto)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Proyectos;
