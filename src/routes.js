const express = require('express');

const routes = express.Router();

const Candidates = require('./controllers/Candidates.controllers');

routes.get('/', Candidates.index);
routes.post('/register', Candidates.create );


module.exports = routes;                                          