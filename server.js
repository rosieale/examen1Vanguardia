const express = require('express');
const mongoose = require('mongoose');
const Alumno = require('./models/alumno'); 
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:3000/Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB', err));


// POST 
app.post('/api/alumnos', async (req, res) => {
  try {
    let alumno = new Alumno(req.body);
    alumno = await alumno.save();
    res.status(201).send(alumno);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET 
app.get('/api/alumnos', async (req, res) => {
  try {
    const alumnos = await Alumno.find({});
    res.send(alumnos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE 
app.delete('/api/alumnos/:numeroDeCuenta', async (req, res) => {
  try {
    const alumno = await Alumno.findOneAndDelete({ numeroDeCuenta: req.params.numeroDeCuenta });
    if (!alumno) {
      return res.status(404).send();
    }
    res.send(alumno);
  } catch (error) {
    res.status(500).send(error);
  }
});

