const model = require("../models/personajes");
const mongoose = require("mongoose");

exports.getData = async (req, res) => {
  await model.find({}, (err, datos) => {
    if (err) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
};

exports.inserData = async (req, res) => {
  const body = req.body;
  await model.create(body, (err, datos) => {
    if (err) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  await model.findOneAndDelete(
    { _id: mongoose.Types.ObjectId(id) },
    (err, datos) => {
      if (err) {
        res.send(err);
      } else {
        res.send(datos);
      }
    }
  );
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  await model.findOne({ _id: mongoose.Types.ObjectId(id) }, (err, datos) => {
    if (err) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
};

exports.updateOne = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  await model.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    {
      $set: {
        nombre_superheroe: body.nombre_superheroe,
        nombre: body.nombre,
        apellidos: body.apellidos,
        descripcion: body.descripcion,
      },
    },
    (error, datos) => {
      if (error) {
        res.send(error);
      } else {
        res.send(datos);
      }
    }
  );
};
