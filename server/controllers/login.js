import { error } from "node:console";
import db from "../config/connectDB.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await db.query(`select email, password from users where email=?`, [email])


        console.log(user[0][0].password, password);

        if (user[0].length == 0) {
            return res.send({ msg: "email not registered or password is wrong", status: false })
        }

        if (user[0][0].password == password) {
            return res.send({ msg: "login successfully", status: true, data: user })
        } else {
            return res.send({ msg: "login failed", status: false })
        }

        return res.send({ msg: "something went wrong", status: false })
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, address, password, role } = req.body;

        const isExist = await db.query(`select email from users where email=?`, [email]
            // , (error, results) => {
            //     if (error) {
            //         console.log(error);
            //     }

            //     if (results.length > 0) {
            //         return results;
            //     }
            // }
        );

        if (isExist[0].length == 0) {
            const res = await db.query(`insert into users (name, email, address, password, role) values (?,?,?,?,?)`, [name, email, address, password, role])
            res.send([{ msg: "User created Successfully", status: true }])
        }

        return res.send([{ msg: "User is already exists", status: false }])
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (req, res) => {
    try {
        const [getUsers] = await db.query(`select * from users`)
        res.send({ msg: "fetch data", status: false, data: getUsers });
    } catch (error) {
        return res.send([{ msg: error, status: false }])
    }
}

const createStore = async (req, res) => {
    try {
        const { storeName, storeAddress, storeEmail } = req.body;

        const isExist = await db.query(`select storeEmail from stores where storeEmail=?`, [storeEmail]
            //     , (error, results) => {
            //     if (error) {
            //         console.log(error);
            //     }

            //     if (results.length > 0) {
            //         return results;
            //     }
            // }
        );

        if (isExist.length > 0) {
            db.query(`insert into stores (storeName, storeAddress, storeEmail) values (?,?,?)`, [storeName, storeAddress, storeEmail])
        }

        res.send(isExist)

        console.log(storeName, storeAddress, storeEmail);

    } catch (error) {
        console.log(error);
    }
}

export { createUser, getUser, login, createStore }