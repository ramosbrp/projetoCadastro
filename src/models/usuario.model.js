const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({

    name:{ type: String, unique: false, required: true },
    intended: { type: String, unique: false, required: true },
    date: { type: String, unique: false, required: true },
    matrial: { type: String, unique: false, require: false },
    gender: { type: String, unique: false, required: true },
    cep: { type: Number, unique: false, required: true },
    address: { type: String, unique: false, required: true },
    number: { type: String, unique: false, required: true },
    district: { type: String, unique: false, required: true },
    city: { type: String, unique: false, required: true },
    state: { type: String, unique: false, required: true },
    tel1: { type: Number, unique: false, required: true },
    tel2: { type: Number, unique: false, required: false },
    cel: { type: Number, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    indentity: { type: Number, unique: true, required: true },
    cpf: { type: Number, unique: true, required: true },
    haveVehicle: { type: String, unique: false, required: false },
    haveLisence: { type: String, unique: false, required: false }    

}, {
    timestamps: true
});

const Usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = Usuarios;