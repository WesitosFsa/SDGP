import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/administrador.css';
import Swal from 'sweetalert2';
function AdministradorUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [permisos, setPermisos] = useState('');
    const [contraseña, setContraseña] = useState('');

    useEffect(() => {
        getUsuarios();
    }, []);
    const handleLogout = () => {
        Swal.fire({
          title: "¿Estás seguro que deseas salir?",
          text: "Los cambios no guardados se perderán",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, he guardado todo"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("¡Gracias!", "", "Gracias por usar nuestra página").then(() => {
              // Redirigir a otra pantalla después de cerrar sesión
              window.location.href = '/';
            });
          }
        });
      };
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
            permisos: permisosValue, // Usar el valor correcto de permisos
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
        })
        
        .catch(error => {
            console.error('Error al agregar usuario:', error);
        });
        Swal.fire({
            icon: "success",
            title: "Usuario agregado exitosamente",
            showConfirmButton: false,
            timer: 1500
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

    const eliminarUsuario = (id) => {
        axios.delete(`http://localhost:3001/usuarios/${id}`)
        .then(response => {
            console.log(response.data);
            getUsuarios();
        })
        .catch(error => {
            console.error('Error al eliminar usuario:', error);
        });
        Swal.fire({
            icon: "error",
            title: "Usuario eliminado",
            });
    };

    const filtrarTabla = (evento) => {
        setFiltro(evento.target.value.toUpperCase());
    };

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.nombre.toUpperCase().includes(filtro) ||
        usuario.email.toUpperCase().includes(filtro) ||
        usuario.ubicacion.toUpperCase().includes(filtro) ||
        usuario.permisos.toUpperCase().includes(filtro)
    );
    return (
        <div className='container'>
            <div>
                <header >
                    <h1>Administrador de Usuarios</h1>
                </header>
                <hr />
                <input type="text" id="buscar" name="buscar" placeholder="Buscar" onChange={filtrarTabla} />
                <div className='tablaad'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ubicación</th>
                                <th scope="col">Permisos</th>
                                <th scope="col">Contraseña</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosFiltrados.map(usuario => (
                                <tr key={usuario.id}>
                                    <th scope="row">{usuario.id}</th>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.ubicacion}</td>
                                    <td>{usuario.permisos}</td>
                                    <td>{usuario.contraseña}</td>
                                    <td>
                                        <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                        <label htmlFor="permisos">Permisos:</label>
                        <select id="permisos" name="permisos" value={permisos} onChange={(e) => setPermisos(e.target.value)}>
                            <option >Seleccione</option>
                            <option value="administrador">Usuarios</option>
                            <option value="usuario">Administrador</option>
                        </select>
                        <br />
                        <label htmlFor="contraseña">Contraseña:</label>
                        <input type="password" id="contraseña" name="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                        <br />
                        <button type="submit">Agregar Usuario</button>
                    </form>
                </div>
                <section>
                    <br />
                    <button onClick={handleLogout} className='btn btn-warning'>Cerrar Sesion</button>
                    <br />
                </section>
            </div>
        </div>
    );
}

export default AdministradorUsuarios;
