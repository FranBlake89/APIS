const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Connection to Mongo
mongoose.connect(config.MONGO_URI)
.then( () => console.log('✅     MongoDB conectado\n'))
.catch( err => console.log('No se pudo conectar a MongoDB: ', err));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

const PORT = config.PORT;
// Start server
app.listen( PORT, () =>{
    console.log(`\n🚀     Servidor corriendo en ${PORT} `);
    console.log('🛑     CTRL + C para terminar conexión ');
})