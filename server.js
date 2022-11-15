require('dotenv').config();
const express = require('express');
const {PORT, FORGE_CLIENT_ID} = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));

// Routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/models', require('./routes/models.js'));


app.listen(PORT, () => { console.log(`Server listening at port ${PORT} ...`)});