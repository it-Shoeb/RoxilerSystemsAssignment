import { createUser, login, createStore } from '../controllers/login.js'
import {autheticateMiddleware } from '../middleware/autheticateMiddleware.js'
import e from 'express'
const router = e.Router();

router.get("/login", autheticateMiddleware,login);
router.get("/createUser", createUser);
router.get("/createStore", createStore);

export default router;