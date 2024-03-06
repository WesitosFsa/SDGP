import React from 'react';
import './css/estilo-informacion.css';

function SoporteTecnico() {
  return (
    
    <div className="container">
      <header className='colabheader'>
      <h2>Preguntas frecuentes</h2>
      </header>

      <section>
        <h2>Soporte</h2>
        <p>En nuestro servicio de soporte, estamos aquí para ayudarte en todo momento. Ya sea que tengas problemas técnicos, preguntas generales o necesites asistencia, nuestro equipo de soporte está listo para brindarte la ayuda que necesitas.</p>
      </section>

      <section>
        <h2>Soporte Técnico</h2>
        <p>Nuestro equipo de soporte técnico está altamente capacitado y listo para resolver cualquier problema que puedas enfrentar. Nos esforzamos por proporcionar soluciones rápidas y eficientes para garantizar tu satisfacción.</p>
      </section>

      <section>
        <h2>Soporte Online</h2>
        <p>Explora nuestras opciones de soporte en línea para obtener respuestas rápidas a tus preguntas. Desde tutoriales hasta preguntas frecuentes, estamos comprometidos a facilitar tu experiencia con nuestro servicio de soporte en línea.</p>
      </section>

      <section>
        <br />
        <button onClick={() => window.location.href='/'} className="btn btn-primary" type="button">Pagina Principal</button>
        <br />
      </section>
    </div>
  );
}

export default SoporteTecnico;
