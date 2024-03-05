import React, { useState } from 'react';
import axios from 'axios';
import './css/inicio.css'; // Asegúrate de usar './' para indicar que es un archivo local

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Realizar la solicitud de inicio de sesión al servidor
      const response = await axios.post('http://localhost:3001/login', { email, password });

      // Verificar la respuesta del servidor
      if (response.status === 200) {
        // Redirigir al usuario según el tipo de permisos
        const { permisos } = response.data;
        if (permisos === 'administrador') {
          window.location.href = '/administrador';
        } else if (permisos === 'usuario') {
          window.location.href = '/proyectosuser';
        } else {
          setError('Tipo de permisos desconocido');
        }
      } else {
        setError('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1>Bienvenido</h1>
          <br />
          <label htmlFor="exampleInputEmail1" className="form-label">Email: </label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">No compartas tu contraseña con otros.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña:</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href = '/administrador'}>Administrador</button>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href = '/proyectosuser'}>Usuario</button>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href = '/'}>Regresar</button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
      <br />
      <br />
      <div className="social-login">
        <button className="google-login">Entrar con Google</button>
        <button className="microsoft-login">Entrar con Microsoft</button>
      </div>
      <br />
    </div>
  );
};

export default LoginPage;
