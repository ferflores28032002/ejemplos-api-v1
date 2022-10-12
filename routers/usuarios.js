// Rutas de la Api para unir los controladores

import { Router } from "express";
import { addroles, deleterol, mostrarroles } from "../controllers/roles.js";
import {
  controllerCreateUsuarios,
  controllerUsuarios,
  deleteUsuarios,
  updateUsuarios,
  upload,
} from "../controllers/usuarios.js";

export const router = Router();

// usamos el router de express para las rutas  ya sea, get, put, delete, post

router.get("/usuarios/", controllerUsuarios);
router.post("/usuarios/", upload, controllerCreateUsuarios);
router.delete("/usuarios/:id", deleteUsuarios);
router.put("/usuarios/:id", upload, updateUsuarios);

router.get("/roles/", mostrarroles);
router.post("/roles/", addroles);
router.delete("/roles/:id", deleterol);
