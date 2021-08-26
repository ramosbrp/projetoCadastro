const Usuario = require('../models/usuario.model')


module.exports = {
    index(req, res) {
        res.json({message: 'Hello World from Controller Usuário'})
    }, 
    async create (req,res) {
        const { name, email, gender, cep } = req.body;

        
        const newUsuario = new Usuario();

        newUsuario.name = name;
        newUsuario.email = email;
        newUsuario.gender = gender;
        newUsuario.cep = cep;

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
}