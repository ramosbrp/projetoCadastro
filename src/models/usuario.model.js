const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');   

const DataSchema = new mongoose.Schema({
    name:{ type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true }

}, {
    timestamps: true
});

const Usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = Usuarios;