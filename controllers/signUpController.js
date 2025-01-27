const { Render } = require("ejs")
const db = require("../db/queries")

async function signUpPageGet(req, res) {
    res.render("sign-up", {
        title: "Sign Up Form"
    })
}

module.exports = {
    signUpPageGet
}