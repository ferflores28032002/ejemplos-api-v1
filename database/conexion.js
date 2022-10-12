// SEQUELIZE : es un ORM, que permite la manipulacion de las bases de datos

import { Sequelize } from "sequelize";

// Utilizaremos MYSQL para esta api

export const sequelize = new Sequelize("ferreplus", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
