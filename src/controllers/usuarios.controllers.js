const Usuario = require('../models/usuario.model')


module.exports = {
    index(req, res) {
        res.json({message: 'Hello World from Controller Usuário'})
    }, 
    async create (req,res) {
        const { name, profession, date, maritalStatus, gender, cep, address, number, neighborhood, city, state, tel1, tel2, cel, email, indentity, cpf, haveVehicle, driverLisence } = req.body;

        console.log("olá, ", req.body )

        
        const newUsuario = new Usuario();

        newUsuario.name = name;
        newUsuario.profession = profession;
        newUsuario.date = date;
        newUsuario.maritalStatus = maritalStatus;
        newUsuario.gender = gender;
        newUsuario.cep = cep;
        newUsuario.address = address;
        newUsuario.number = number;
        newUsuario.neighborhood = neighborhood;
        newUsuario.city = city;
        newUsuario.state = state;
        newUsuario.tel1 = tel1;
        newUsuario.tel2 = tel2;
        newUsuario.cel = cel; 
        newUsuario.email = email;
        newUsuario.indentity = indentity;
        newUsuario.cpf = cpf;
        newUsuario.haveVehicle = haveVehicle;
        newUsuario.driverLisence = driverLisence;

        
        newUsuario.save((err, savedUsuario)=> {
            if(err) {
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(savedUsuario);
        });

        // let user = Usuario.findOne({email});
        // if(email.unique == true) {
        //     data = { name, intended, date, matrial, gender, cep, address, number, district, city, state, tel1, tel2, cel, email, indentity, cpf, haveVehicle, haveLisence };
        //     user = await Usuario.create(data);

        //     return res.status(200).json(user);
        // } else {
        //     return res.status(500).json(err);
        // }



        // const enviarFormulario = async (req, res) => {
        //     try {
        //         if (await Usuario.findOne({ email: req.body.email })) {
        //             return res.status(400).send({ error: 'Email já cadastrado!' })
        //         }
    
        //         return res.status(201).send({ msg: 'Formulário enviado' });
        //     } catch (error) {
        //         return res.status(500).send({ error: 'Erro interno do servidor' });
        //     }
        // }

        // enviarFormulario();                     
    
    }
};