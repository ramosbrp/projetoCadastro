const Usuario = require('../models/usuario.model')


module.exports = {
    index(req, res) {
        res.json({message: 'Hello World from Controller Usuário'})
    }, 
    async create (req,res) {
        const { name, intended, date, matrial, gender, cep, address, number, district, city, state, tel1, tel2, cel, email, indentity, cpf, haveVehicle, haveLisence } = req.body;

        
        const newUsuario = new Usuario();

        newUsuario.name = name;
        newUsuario.intended = intended;
        newUsuario.date = date;
        newUsuario.matrial = matrial;
        newUsuario.gender = gender;
        newUsuario.cep = cep;
        newUsuario.address = address;
        newUsuario.number = number;
        newUsuario.district = district;
        newUsuario.city = city;
        newUsuario.state = state;
        newUsuario.tel1 = tel1;
        newUsuario.tel2 = tel2;
        newUsuario.cel = cel; 
        newUsuario.email = email;
        newUsuario.indentity = indentity;
        newUsuario.cpf = cpf;
        newUsuario.haveVehicle = haveVehicle;
        newUsuario.haveLisence = haveLisence;


        newUsuario.save((err, savedUsuario)=> {
            if(err) {
                console.log(err);
                return res.status(500).send();
            }
            return res.status(200).send(savedUsuario);
        })

        // let user = Usuario.findOne({email});
        // if(email.unique == true) {
        //     data = { name, email, gender, cep };
        //     user = await Usuario.create(data);

        //     return res.status(200).json(user);
        // } else {
        //     return res.status(500).json(user);
        // }
    }
};