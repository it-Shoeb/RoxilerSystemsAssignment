import { error } from "node:console";
import db from "../config/connectDB.js";

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        res.send(username, password)
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const { name, username, password, role } = req.body;
        // res.send(name, username, password, role)

        // const isExist = await db.query(`select username from users where username=?`, [username], (error, results) => {
        //     if (error) {
        //         console.log(error);
        //     }

        //     if (results.length > 0) {
        //         return results;
        //     }
        // });

        const isExist = await db.query(`select username from users where username=?`, [username])
        console.log(isExist);

    } catch (error) {
        console.log(error);
    }
}

const createStore = async (req, res) => {
    try {
        const { storeName, username, password } = req.body;
        res.send(storeName, username, password)
    } catch (error) {
        console.log(error);
    }
}

export { createUser, login, createStore }