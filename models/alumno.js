
const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  numeroDeCuenta: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  carrera: {
    type: String,
    required: true
  },
  seccion: {
    type: String,
    required: true
  }
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
