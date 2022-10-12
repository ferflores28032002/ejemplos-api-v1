import { modalRoles } from "../models/modalRoles.js";

export const mostrarroles = async (req, res) => {
  try {
    const datos = await modalRoles.findAll();

    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addroles = async (req, res) => {
  const { name } = req.body;

  try {
    const datos = await modalRoles.create({
      name,
    });

    res.json({
      resultados: "Se creo correctamente el rol del usuario",
      datos,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleterol = async (req, res) => {
  const { id } = req.params;
  try {
    const deletes = await modalRoles.destroy({
      where: {
        id,
      },
    });

    res.json({
      resultado: "Rol eliminado exitosamente",
      deletes,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// llaves foraneas sobre las tablas usuarios y roles de usuarios del sistema


