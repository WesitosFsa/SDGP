import React, { useEffect, useState } from 'react';
import './css/visualizar.css';


function VisualizarProyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Esta función se llama al cargar la página y cuando se actualiza la lista de proyectos
    function actualizarListaProyectos() {
      // Obtener la lista de proyectos desde localStorage
      const proyectosGuardados = localStorage.getItem("proyectos");
      if (proyectosGuardados) {
        const listaProyectos = JSON.parse(proyectosGuardados);
        setProyectos(listaProyectos);
      }
    }

    // Llama a la función al cargar la página
    actualizarListaProyectos();
  }, []);

  // Función para manejar el clic en un proyecto
  function handleProyectoClick(proyecto) {
    console.log("Proyecto seleccionado:", proyecto.nombre);
  }

  return (
    <div className="container">
      <h1>Selección de Proyecto</h1>
      <div className="search-container">
        <input type="text" id="buscarProyecto" name="buscarProyecto" placeholder="Buscar Proyecto" />
      </div>
      <h2>Lista de proyectos</h2>
      <ul id="listaProyectos">
        {proyectos.map((proyecto, index) => (
          <li key={index} onClick={() => handleProyectoClick(proyecto)}>{proyecto.nombre}</li>
        ))}
      </ul>
      <a href="/"><button>Volver a la página de Proyectos</button></a>
    </div>
  );
}

export default VisualizarProyectos;
