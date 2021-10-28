const mongoose = require("mongoose");

const personajesScheme = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    apellidos: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    nombre_superheroe: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("personajes", personajesScheme);
