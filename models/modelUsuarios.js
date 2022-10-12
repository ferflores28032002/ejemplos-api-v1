// Modelos de las tablas de la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/conexion.js";

export const modelUsuarios = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
