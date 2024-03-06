import React, { useState, useEffect } from 'react';
import './css/styles.css';
import axios from 'axios';
import Swal from 'sweetalert2';
function CrearCuenta() { // Cambia "crearcuenta" a "CrearCuenta"
      const [usuarios, setUsuarios] = useState([]);
      const [nombre, setNombre] = useState('');
      const [email, setEmail] = useState('');
      const [ubicacion, setUbicacion] = useState('');
      const [permisos, setPermisos] = useState('');
      const [contraseña, setContraseña] = useState('');

      useEffect(() => {
        getUsuarios();
      }, []);

      const agregarUsuario = (evento) => {
        evento.preventDefault();

        // Asignar el valor correcto de permisos
        let permisosValue = '';
        if (permisos === 'administrador') {
          permisosValue = '1';
        } else if (permisos === 'usuario') {
          permisosValue = '2';
        }

        axios.post('http://localhost:3001/agregarUsuario', {
          nombre,
          email,
          ubicacion,
          permisos: "1", // Usar el valor correcto de permisos
          contraseña
        })
        .then(response => {
          console.log(response.data);
          getUsuarios();
          // Reiniciar campos del formulario
          setNombre('');
          setEmail('');
          setUbicacion('');
          setPermisos('');
          setContraseña('');
          Swal.fire({
            icon: "success",
            title: "Enhorabuena cuenta creada exitosamente",
            showConfirmButton: false,
            timer: 2500
          });
        })
        .catch(error => {
          console.error('Error al agregar usuario:', error);
        });
      };

      const getUsuarios = () => {
        axios.get('http://localhost:3001/usuarios')
        .then(response => {
          setUsuarios(response.data);
        })
        .catch(error => {
          console.error('Error al obtener usuarios:', error);
        });
      };
      return(
    <div className="contenedor">
    <div className="container-cuenta">
      <h1>Bienvenido Crea tu cuenta</h1>
      <div className='formad'>
                    <form id="formularioUsuario" onSubmit={agregarUsuario}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label htmlFor="ubicacion">Ubicación:</label>
                        <input type="text" id="ubicacion" name="ubicacion" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} required />
                        <br />
                        <label htmlFor="contraseña">Contraseña:</label>
                        <input type="password" id="contraseña" name="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                        <br />
                        <button 
                         type="submit">Agregar Usuario</button>
                    </form>
      </div>
      <br/>
    </div>
    </div>
  );
}

export default CrearCuenta; // Cambia "crearcuenta" a "CrearCuenta" en la exportación
