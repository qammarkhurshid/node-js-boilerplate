/* eslint-disable import/extensions */
import * as dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import { expressjwt } from 'express-jwt';
import cors from 'cors';

import router from './routers/index.js';

dotenv.config();

const app = express();

const { JWT_SECRET } = process.env;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger('dev'));

app.use('/api', expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] }), router);

export default app;
