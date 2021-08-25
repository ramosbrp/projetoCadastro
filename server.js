const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb%2Bsrv%3A%2F%2FramosUser%3Aptxwcj53DcQwyxda%40cluster0.uyrap.mongodb.net%2Fcadastro%3FretryWrites%3Dtrue%26w%3Dmajority', {
    // userUnifieldTopology: true,
    useNewUrlParser: true,
    // userFindAndModify: true
}, function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log('MongoDB CONECTADO com sucesso!');     
    };
});


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/home', function(req,res) {
    res.json({message: 'Hello World'});
});

app.listen(port, function() {
    console.log(`Server runing on port ${port}`);
})