import db from "../config/connectDB.js"

const GetData = async (req, res) => {
    try {
        const [data] = await db.query(`select * from stores`)
        res.send({ msg: "data get successfully", status: true, data: data })
    } catch (error) {
        res.send({ msg: "data get failed", status: false })
    }
}

export default GetData 