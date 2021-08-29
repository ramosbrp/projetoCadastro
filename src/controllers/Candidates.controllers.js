const Candidates = require('../models/Candidates')


module.exports = {
    index(req, res) {
        res.json({message: 'Hello World!!'})
    }, 
    async create (req,res) {
        const { name, profession, date, maritalStatus, gender, address: {cep, street, number, neighborhood, city, state}, tel1, tel2, cel, email, documents: {identity, cpf, haveVehicle, driverLisence} } = req.body;
        

        
        const newCandidates = new Candidates();

        newCandidates.name = name;
        newCandidates.profession = profession;
        newCandidates.date = date;
        newCandidates.maritalStatus = maritalStatus;
        newCandidates.gender = gender;    
        newCandidates.address.cep = cep;
        newCandidates.address.street = street;
        newCandidates.address.number = number;
        newCandidates.address.neighborhood = neighborhood;
        newCandidates.address.city = city;
        newCandidates.address.state = state;        
        newCandidates.tel1 = tel1;
        newCandidates.tel2 = tel2;
        newCandidates.cel = cel; 
        newCandidates.email = email;
        newCandidates.documents.identity = identity;
        newCandidates.documents.cpf = cpf;
        newCandidates.documents.haveVehicle = haveVehicle;
        newCandidates.documents.driverLisence = driverLisence;

        
        
        newCandidates.save((err, savedCandidates)=> {
            try {
                if(Candidates.findOne({cpf})) {
                    return res.status(400).send({ cpf });
                } else {
                    return res.status(200).send(savedCandidates);
                }
            } catch {
                return res.status(500).send(err);
            }
        });                
    
    }
};