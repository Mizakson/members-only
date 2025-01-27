const { Render } = require("ejs")
const db = require("../db/queries")
const bcrypt = require("bcryptjs")

async function signUpPageGet(req, res) {
    res.render("sign-up", {
        title: "Sign Up Form"
    })
}

async function signUpPagePost(req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const password = req.body.password

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.addUser(firstName, lastName, username, hashedPassword)
    res.redirect("/")
    return
}

module.exports = {
    signUpPageGet,
    signUpPagePost,
}