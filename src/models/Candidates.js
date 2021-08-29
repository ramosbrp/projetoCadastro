const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({

    name:{ type: String, unique: false, required: true },
    profession: { type: String, unique: false, required: true },
    date: { type: String, unique: false, required: true },
    maritalStatus: { type: String, unique: false, require: false },
    gender: { type: String, unique: false, required: true }, 
    address: {

        cep: { type: Number, unique: false, required: true },
        street:  { type: String, unique: false, required: false },
        number: { type: String, unique: false, required: false },
        neighborhood: { type: String, unique: false, required: true },
        city: { type: String, unique: false, required: true },
        state: { type: String, unique: false, required: true }
    },
     
    tel1: { type: Number, unique: false, required: false },
    tel2: { type: Number, unique: false, required: false },
    cel: { type: Number, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    documents: {
        
        identity: { type: Number, unique: true, required: true },
        cpf: { type: Number, unique: true, required: false },
        haveVehicle: { type: String, unique: false, required: false },
        driverLisence: { type: String, unique: false, required: false }
    }

}, {
    timestamps: true
});

const Candidates = mongoose.model('Candidates', DataSchema);
module.exports = Candidates;