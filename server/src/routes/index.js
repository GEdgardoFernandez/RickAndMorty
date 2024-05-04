const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

// Ruta para obtener un personaje por ID
router.get('/character/:id', getCharById);

// Rutas nuevas
router.get('/login', login); // Obtener el formulario de inicio de sesión
router.post('/login', login); // Iniciar sesión
router.post('/fav', postFav); // Agregar un personaje a favoritos
router.delete('/fav/:id', deleteFav); // Eliminar un personaje de favoritos

module.exports = {router};