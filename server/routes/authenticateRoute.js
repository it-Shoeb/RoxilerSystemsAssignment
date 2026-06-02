import { createUser, login, createStore, getUser } from '../controllers/login.js'
import { autheticateMiddleware } from '../middleware/autheticateMiddleware.js'
import e from 'express'
const router = e.Router();

router.post("/login", login);
router.post("/createUser", createUser);
router.post("/createStore", createStore);
router.get("/getUsers", getUser);
// router.post("/createStore", createStore);

export default router;