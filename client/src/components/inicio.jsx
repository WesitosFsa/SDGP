import React from 'react';
import './css/inicio.css'; // Asegúrate de usar './' para indicar que es un archivo local


const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Email:', email, 'Password:', password);
    // Aquí puedes agregar la lógica para iniciar sesión
  };

  return (
    <div>
    <form>
      <div className="mb-3">
      <h1>Bienvenido</h1>
      <br/>

        <label for="exampleInputEmail1" className="form-label">Email: </label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">No compartas tu contraseña con otros.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Contraseña:</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href='/'}>Regresar</button>
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
};
export default LoginPage;