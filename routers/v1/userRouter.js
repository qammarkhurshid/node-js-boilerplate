/* eslint-disable import/extensions */
import express from 'express';
import userService from '../../services/userService/userService.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    const result = await userService.getAllUsers(req, res);
    return res.status(200).json(result);
  } catch (err) {
    // Logger.error(err.message);
    return res.status(400).json(err.message);
  }
});

export default userRouter;
