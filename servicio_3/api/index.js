//require("../config/database.js");
const { PORT } = require("../config/variable.js");
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const axios = require('axios');

// index.js
const route_live_web = require('./../src/live-web.js');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());

// version del app
app.get('/', (req, res) => {
    res.json({ name: 'Servicio 2', version: '1.0.6' });
});

/***************************************************/
// competencia: El Comercio con playwright scraper test 2  //
/***************************************************/

// Aplicar las rutas live-web
app.use('/live-web', route_live_web);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;