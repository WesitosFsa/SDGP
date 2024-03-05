const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456mm",
    database: "SDGP_CRUD"
});

app.post("/create", (req, res) => {
    const nombreProyecto = req.body.nombreProyecto;
    const estadoProyecto = req.body.estadoProyecto;
    const actualizacionesProyecto = req.body.actualizacionesProyecto;

    db.query('INSERT INTO proyectos(nombreproyecto, estadodelproyecto, actualizacionesdelproyecto) VALUES(?,?,?)', [nombreProyecto, estadoProyecto, actualizacionesProyecto],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar el proyecto.");
            } else {
                res.status(200).send("Proyecto registrado con éxito.");
            }
        }
    );
});

app.get("/proyectos", (req, res) => {
    db.query('SELECT * FROM proyectos',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener los proyectos.");
            } else {
                res.status(200).send(result);
            }
        }
    );
});

app.put("/update", (req, res) => {
    const idProyecto = req.body.idProyecto;
    const nombreProyecto = req.body.nombreProyecto;
    const estadoProyecto = req.body.estadoProyecto;
    const actualizacionesProyecto = req.body.actualizacionesProyecto;

    db.query('UPDATE proyectos SET nombreproyecto=?, estadodelproyecto=?, actualizacionesdelproyecto=? WHERE idproyecto=?', [nombreProyecto, estadoProyecto, actualizacionesProyecto, idProyecto],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al actualizar el proyecto.");
            } else {
                res.status(200).send("Proyecto actualizado con éxito.");
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Servidor escuchando en el puerto 3001")
});
// En tu servidor Node.js
app.post("/agregarUsuario", (req, res) => {
    const { nombre, email, ubicacion, permisos, contraseña } = req.body;

    db.query('INSERT INTO usuarios (nombre, email, ubicacion, permisos, contraseña) VALUES (?, ?, ?, ?, ?)',
        [nombre, email, ubicacion, permisos, contraseña],
        (err, result) => {
            if (err) {
                console.error("Error al agregar usuario:", err);
                res.status(500).send("Error al agregar usuario.");
            } else {
                res.status(200).send("Usuario agregado con éxito.");
            }
        });
});

app.get("/usuarios", (req, res) => {
    db.query('SELECT * FROM usuarios', (err, result) => {
        if (err) {
            console.error("Error al obtener usuarios:", err);
            res.status(500).send("Error al obtener usuarios.");
        } else {
            res.status(200).json(result);
        }
    });
});
