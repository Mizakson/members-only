const { Render } = require("ejs")
const db = require("../db/queries")

async function signUpPageGet(req, res) {
    // query here
    // const allUsers = await db.getAllUsers()
    // console.log(allUsers)
    res.send("SIGNUP PAGE...")
}

module.exports = {
    signUpPageGet
}