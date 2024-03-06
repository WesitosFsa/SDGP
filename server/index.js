const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456mm",
    database: "SDGP_CRUD"
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión exitosa a la base de datos");
});

app.post('/login', (req, res) => {
    const { email, contraseña } = req.body;
    const values = [email, contraseña];
    db.query("SELECT * FROM usuarios WHERE email = ? AND contraseña = ?", values, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length > 0) {
                res.status(200).send({
                   "id": result[0].permisos,
                   "email": result[0].email,
                   "contraseña": result[0].contraseña,

                });
                } else {
                res.status(400).send('Usuario no existe');
            }
        }
    });
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

app.delete("/usuarios/:id", (req, res) => {
    const userId = req.params.id; // Obtener el ID del usuario de los parámetros de la solicitud

    // Realizar la consulta para eliminar el usuario de la base de datos
    db.query('DELETE FROM usuarios WHERE id = ?', userId, (err, result) => {
        if (err) {
            console.error("Error al eliminar usuario:", err);
            res.status(500).send("Error al eliminar usuario.");
        } else {
            // Verificar si se eliminó correctamente algún registro
            if (result.affectedRows > 0) {
                res.status(200).send("Usuario eliminado correctamente.");
            } else {
                res.status(404).send("No se encontró ningún usuario con ese ID.");
            }
        }
    });
});
app.delete("/proyectos/:id", (req, res) => {
    const userId = req.params.id; // Obtener el ID del usuario de los parámetros de la solicitud

    // Realizar la consulta para eliminar el usuario de la base de datos
    db.query('DELETE FROM proyectos WHERE idproyecto = ?', userId, (err, result) => {
        if (err) {
            console.error("Error al eliminar proyecto:", err);
            res.status(500).send("Error al eliminar proyecto.");
        } else {
            // Verificar si se eliminó correctamente algún registro
            if (result.affectedRows > 0) {
                res.status(200).send("Proyecto eliminado.");
            } else {
                res.status(404).send("No se encontró ningún proyecto con ese ID.");
            }
        }
    });
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

