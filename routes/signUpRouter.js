const { Router } = require("express")
const signUpRouter = Router()
const signUpController = require("../controllers/signUpController")

signUpRouter.get("/", signUpController.signUpPageGet)
signUpRouter.post("/", signUpController.signUpPagePost)

module.exports = signUpRouter