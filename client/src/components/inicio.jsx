import React, { useState } from 'react';
import axios from 'axios';
import './css/inicio.css'; // Asegúrate de usar './' para indicar que es un archivo local
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [body, setBody] = useState({ email: '', contraseña: '' });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value
    });
  };

  const onSubmit = () => {
    axios.post("http://localhost:3001/login", body)
      .then(({ data }) => {
        if (data.id === "1") {
          // Muestra la alerta y luego redirecciona a proyectosuser
          Swal.fire({
            icon: "success",
            title: "Bienvenido a SDGP",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.href = '/proyectosuser';
          });
        } else if (data.id === "2") {
          // Muestra la alerta y luego redirecciona a administrador
          Swal.fire({
            icon: "success",
            title: "Bienvenido a administradores",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.href = '/administrador';
          });
        } else {
          // Otro caso, manejar según sea necesario
        }
      })
      .catch(({ response }) => {
        Swal.fire({
          icon: "error",
          title: "Usuario o constraseña incorrecto",
          text: "Inserte de nuevo",
        });
        console.log(response.data);
      });
  };
  
  

  return (
    <div>
      <form>
        <div className="mb-3">
          <h1>Bienvenido</h1>
          <br />
          <label htmlFor="exampleInputEmail1" className="form-label">Email: </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={body.email}
            onChange={inputChange}
            name='email' />
          <div id="emailHelp" className="form-text">No compartas tu contraseña con otros.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={body.contraseña}
            onChange={inputChange}
            name="contraseña" />
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={onSubmit}>Ingresar</button>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href = '/'}>Regresar</button>
      </form>

      <br />
      <br />
      <div className="social-login">
        <button className="google-login">Entrar con Google</button>
        <button className="microsoft-login">Entrar con Microsoft</button>
      </div>
      <br />
    </div>
  );
}

export default LoginPage;