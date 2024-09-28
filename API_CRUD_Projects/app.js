const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(config.MONGO_URI)
.then( () => console.log('✅     MongoDB conectado\n'))
.catch( err => console.log('No se pudo conectar a MongoDB: ', err));

app.use('/api/auth', authRoutes);

const PORT = config.PORT;

app.listen( PORT, () =>{
    console.log(`\n🚀     Servidor corriendo en ${PORT} `);
    console.log('🛑     CTRL + C para terminar conexión ');
})