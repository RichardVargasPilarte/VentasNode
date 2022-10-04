import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/index'

require('dotenv').config();

import { dbConnection } from './database/config';

// base de datos
dbConnection();

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// rutas
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);    // listen process.env.PORT
});

