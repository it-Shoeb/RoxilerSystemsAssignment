import db from "./config/connectDB.js";
import express from "express"

import dotenv from "dotenv";
dotenv.config()

const app = express();


app.use(express.json());
import authenticateRoute from './routes/authenticateRoute.js'


app.get("/", (req, res) => {
    res.send("route working")
})

app.use("/authenticate", authenticateRoute)

app.listen(5000, () => {
    console.log(`Server running on http://localhost:${5000}`);
})