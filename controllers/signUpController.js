const { Render } = require("ejs")
const db = require("../db/queries")
const bcrypt = require("bcryptjs")
const { body, validationResult } = require("express-validator")

const passwordErrorMessage = 'Passwords must match!'

const validatePassword = [
    body("confirmPassword").trim()
        .custom((value, { req }) => {
            return value === req.body.password
        }).withMessage(passwordErrorMessage)
]

exports.signUpPageGet = async (req, res) => {
    res.render("sign-up", {
        title: "Sign Up Form"
    })
}

exports.signUpPagePost = [
    validatePassword,
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).render("sign-up", {
                title: "Sign Up Form",
                errors: errors.array(),
            })
        }
        const { firstName, lastName, username, password} = req.body
        console.log("pw matches!")
        const hashedPassword = await bcrypt.hash(password, 10)

        await db.addUser(firstName, lastName, username, hashedPassword)
        res.redirect("/")
    }
]
    // const firstName = req.body.firstName
    // const lastName = req.body.lastName
    // const username = req.body.username
    // const password = req.body.password
    // const confirmPassword = req.body.confirmPassword

    // console.log(password, confirmPassword)

    // if (password === confirmPassword) {
    //     console.log("pw matches!")
    //     const hashedPassword = await bcrypt.hash(password, 10)

    //     await db.addUser(firstName, lastName, username, hashedPassword)
    //     res.redirect("/")
    //     return
    // } else {
    //     console.log("PASSWORDS DON'T MATCH!")
    //     res.send("PASSWORDS DON'T MATCH!")
    //     return
    // }