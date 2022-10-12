// Modelos de las tablas de la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/conexion.js";
import { modelUsuarios } from "./modelUsuarios.js";

export const modalRoles = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

// uniones alas demas tablas del sistema

modalRoles.hasMany(modelUsuarios,{
  foreignKey: "idRol",
  sourceKey: "id"
});

modelUsuarios.belongsTo(modalRoles,{
  foreignKey: "idRol",
  targetId: "id"
})