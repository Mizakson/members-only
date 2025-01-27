const { Render } = require("ejs")
const db = require("../db/queries")

async function indexPageGet(req, res) {
    // query here
    const allUsers = await db.getAllUsers()
    console.log(allUsers)
    res.send("HOMEPAGE...")
}

module.exports = {
    indexPageGet
}