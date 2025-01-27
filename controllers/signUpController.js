const { Render } = require("ejs")
const db = require("../db/queries")

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
    const membershipStatus = "FALSE"

    // db query here
    res.redirect("/")
    return
}

module.exports = {
    signUpPageGet,
    signUpPagePost,
}