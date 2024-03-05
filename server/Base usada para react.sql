ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456mm';
create database SDGP_CRUD;
use SDGP_CRUD;
-- Crear tabla de proyectos
CREATE TABLE proyectos (
    idproyecto INT AUTO_INCREMENT PRIMARY KEY,
    nombreproyecto VARCHAR(255),
    estadodelproyecto VARCHAR(100),
    actualizacionesdelproyecto TEXT
);
-- Crear tabla de usuarios
select * from usuarios;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(255),
    ubicacion VARCHAR(100),
    permisos VARCHAR(100),
    contraseña VARCHAR(100)
);