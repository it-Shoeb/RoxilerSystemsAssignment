import e from "express";
const route = e.Router();

import GetData from "../controllers/GetData.js"

import { autheticateMiddleware } from "../middleware/autheticateMiddleware.js"

route.get("/getStore", autheticateMiddleware, GetData)
export default route