const { Render } = require("ejs")
const db = require("../db/queries")

exports.indexPageGet = async (req, res) => {
    const allUsers = await db.getAllUsers()
    console.log(allUsers)
    res.render("index");
}