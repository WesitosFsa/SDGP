import React from 'react';
import './css/styles.css';

function crearcuenta() {
  return (
    
    <div className="container-cuenta">
      <h1>Bienvenido Crea tu cuenta</h1>
      <form action="#">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="btn btn-primary btn-lg">Crear cuenta</button>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => window.location.href='/'}>Regresar</button>
      </form>
      <br/>
      <div className="social-login">
        <button className="google-login">Crear con Google</button>
        <button className="microsoft-login">Crear con Microsoft</button>
      </div>
    </div>
  );
}

export default crearcuenta;
