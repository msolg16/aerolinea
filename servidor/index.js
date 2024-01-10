const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');
const multipart = require('connect-multiparty');

const app = express();

const multiPartMiddelware = multipart({
    uploadDir: './public/images'
});

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));
app.use('/api/aviones', require('./routes/avion'));
app.use('/api/tripulacion', require('./routes/tripulacion'));
app.use('/api/pilotos', require('./routes/piloto'));
app.use('/api/vuelos', require('./routes/vuelo'));

app.post('/api/subir', multiPartMiddelware, (req, res) => {
    if(Object.keys(req.files).length === 0){
        console.log(req.files)
        res.json({
            'message': 'No se ha enviado un archivo.....!!!'
        })
    }else{
        console.log(req.files)
        res.json({
            'message': 'Fichero subido correctamente.....!!!'
        }).status(200)
    }
})

app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})