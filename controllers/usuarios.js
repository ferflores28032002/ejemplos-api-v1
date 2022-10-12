// En esta unimos los modelos con los controladores para luego mandarlos alas rutas

import { modelUsuarios } from "../models/modelUsuarios.js";
import multer from "multer";
import path from "path";
import { modalRoles } from "../models/modalRoles.js";

// MOstrar todos los usuarios del sistema

export const controllerUsuarios = async (req, res) => {
  try {
    const usuarios = await modelUsuarios.findAll({
      include:{
        model: modalRoles
      }
    });

    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear usuarios en el sistema

export const controllerCreateUsuarios = async (req, res) => {
  const { name, apellido, idRol } = req.body;

  const image = req.file.path;

  try {
    const usuarios = await modelUsuarios.create({
      name,
      apellido,
      image,
      idRol,
    });

    res.json({
      results: "Create successly",
      usuarios,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un solo usuario del sistema

export const deleteUsuarios = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioDelete = await modelUsuarios.destroy({
      where: {
        id,
      },
    });

    res.json("Usuario eliminado exitosamente");
    console.log(usuarioDelete);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar usuarios del sistema

export const updateUsuarios = async (req, res) => {
  const { id } = req.params;
  const image = req.file.path;
  // const { name, apellido } = req.body;

  try {
    const usuario = await modelUsuarios.findOne({
      where: {
        id,
      },
    });

    usuario.set({
      name: req.body.name,
      apellido: req.body.apellido,
      image: req.file.path,
    });

    await usuario.save();

    res.json({
      respuesta: "Usuario actualizado exitosamente",
      usuario,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 8. Upload Image Controller

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");
