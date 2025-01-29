const { Render } = require("ejs")
const db = require("../db/queries")

exports.indexPageGet = async (req, res) => {
    // query here
    const allUsers = await db.getAllUsers()
    console.log(allUsers)
    res.send("HOMEPAGE...")
}