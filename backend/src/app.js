import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';
import corsOptions from './configs';

dotenv.config();
const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api', cors(corsOptions), router);

export default app;
