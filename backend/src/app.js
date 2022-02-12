import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models'
import router from './routes';
import corsOptions from './configs';

dotenv.config();

const app = express();

db.sequelize.sync();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api', cors(corsOptions), router);

export default app;
