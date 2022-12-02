const express = require('express');

const app = express();


//Crear una ruta inicial
app.get( '/', (req, res) => {
    res.send('Helloworld, my fisrt server... !!!')
})

//Iniciar el server
const server = app.listen(3000, () => {
    console.log(`Server started on port http://localhost:${server.address().port}`);
})