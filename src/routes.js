const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers');

routes.get('/', Usuario.index);
routes.post('/register', Usuario.create );


module.exports = routes;                                            