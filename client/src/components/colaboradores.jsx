import React from 'react';
import './css/estilo-informacion.css';

function InformacionUsuarios() {
    return (
        <div className='container'>
            <header className='colabheader'>
                <h1>COLABORADORES DEL PROYECTO</h1>
            </header>

            <section className='colaboradores'>
                <h2>Desarrollador Principal - Juan García</h2>
                <p>Juan García es el usuario principal en el proyecto. Como desarrollador experto en sistemas, ha trabajado incansablemente en la implementación de las funciones fundamentales del sistema. Su habilidad para resolver problemas y su experiencia en el desarrollo web lo destacan como un miembro clave del equipo.</p>
                <p>Progreso: Juan ha completado el 70% de las tareas asignadas y se encuentra liderando el desarrollo del backend.</p>
            </section>

            <section className='colaboradores'>
                <h2>Desarrolladora Frontend - María Rodríguez </h2>
                <p>María Rodríguez es una talentosa desarrolladora frontend que se enfoca en la interfaz de usuario del proyecto. Con un ojo agudo para el diseño y la experiencia del usuario, ha creado interfaces intuitivas que mejoran la interacción del usuario con la aplicación.</p>
                <p>Progreso: María ha completado el 60% de las tareas relacionadas con la interfaz de usuario y continúa aportando ideas creativas al proyecto.</p>
            </section>

            <section className='colaboradores'>
                <h2>Administrador de Base de Datos - Andrés López</h2>
                <p>Andrés López es el experto en bases de datos del equipo. Su responsabilidad incluye diseñar, implementar y mantener la base de datos del proyecto. Gracias a su experiencia en gestión de datos, el sistema funciona de manera eficiente y segura.</p>
                <p>Progreso: Andrés ha completado el 50% de la implementación de la base de datos y está trabajando diligentemente para optimizar su rendimiento.</p>
            </section>

            <section className='colaboradores'>
                <br />
                <a href="/proyectosuser"><button className="volvercolab">Pagina Principal</button></a>
                <br />
            </section>
        </div>
    );
}

export default InformacionUsuarios;
