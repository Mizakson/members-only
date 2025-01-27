const { Router } = require("express")
const signUpRouter = Router()
const signUpController = require("../controllers/signUpController")

signUpRouter.get("/sign-up", signUpController.signUpPageGet)

module.exports = signUpRouter