/* eslint-disable import/extensions */
import express from 'express';
import apiRouterV1 from './v1/index.js';

const router = express.Router();
router.use('/v1', apiRouterV1);

export default router;
