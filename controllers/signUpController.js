const { Render } = require("ejs")
const db = require("../db/queries")
const bcrypt = require("bcryptjs")
const { body, validationResult } = require("express-validator")

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
    const confirmPassword = req.body.confirmPassword

    console.log(password, confirmPassword)

    if (password === confirmPassword) {
        console.log("pw matches!")
        const hashedPassword = await bcrypt.hash(password, 10)

        await db.addUser(firstName, lastName, username, hashedPassword)
        res.redirect("/")
        return
    } else {
        console.log("PASSWORDS DON'T MATCH!")
        res.send("PASSWORDS DON'T MATCH!")
        return
    }


}

module.exports = {
    signUpPageGet,
    signUpPagePost,
}