const Citas = require("../models/citaModel.js");

exports.findAll = (req, res) => {
  Citas.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ta mal",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Citas.findById(req.params.citaid, (err, data) => {
    if (data == undefined) {
      res.send("undefined");
    } else {
      res.send(data);
    }
  });
};

exports.create = (req, res) => {
    
  if (!req.body) {
    res.status(400).send({
      message: "Vacio no",
    });
  }
  
  const citas = new Citas({
    doctor: req.body.doctor,
    fecha: req.body.fecha,
    hora: req.body.hora,
    tipo: req.body.tipo,
  });
  console.log('doctor: ' + req.body.doctor);
  Citas.create(citas, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error al crear una cita",
      });
    else res.send('bien');
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Vacio no!",
    });
  }

  Citas.updateById(req.params.citaid, new Citas(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `no encontrado esa Citas ${req.params.citaid}.`,
        });
      } else {
        res.status(500).send({
          message: "error al actualizar Citas " + req.params.citaid,
        });
      }
    } else res.send(data);
  });
};

exports.removeOne = (req, res) => {
  Citas.deleteOne(req.params.citaid, (err, data) => {
    if (data != null)
      /*res.status(500).send({
        message: 
          err.message || "Error al editar una Citas"
      });*/
      res.send("no hay con ese id compai");
    else res.send("data: " + data);
  });
};

exports.removeAll = (req, res) => {
  Citas.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "error al eliminar",
      });
    else res.send({ message: `todas las Citass borradas!` });
  });
};
