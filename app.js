// Express
import express from "express";
import cors from "cors";
import { sequelize } from "./database/conexion.js";
import { router } from "./routers/usuarios.js";
import dotenv from 'dotenv'

const app = express();
app.use('/Images', express.static('./Images'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

dotenv.config({path: "./.env"});

// Verificamos la conexion de la base de datos

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log(`La conexión a la base de datos ha sido exitosa!`);
  } catch (error) {
    console.log(`Error al conectar con la base de datos`);
  }
}


// Utilizamos los routers con los controladores
app.use(router);
main();

// Puerto en que se ejecutara la Api de Inventario
const puerto = process.env.PORT || 4000;

app.listen(puerto, () => {
  console.log("Servidor ejecutando en el puerto http://localhost:" + puerto);
});
