const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require ('./swagger.json');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.URI

app.use(cors());

mongoose.connect(`${uri}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log('MongoDB CONECTADO com sucesso!');     
    };
});

app.use(cookieParser());
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(port, function() {
    console.log(`Server runing on port ${port}`);
});