/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './userRouter.js';

const apiRouterV2 = express.Router();

apiRouterV2.use('/user', userRouter);

export default apiRouterV2;
