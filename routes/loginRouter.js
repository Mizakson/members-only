const { Router } = require("express")
const logInRouter = Router()
const logInController = require("../controllers/loginController")

// logInRouter.get("/", logInController.logInPageGet) render log-in page here
logInRouter.post("/", logInController.logInPostReq)

module.exports = logInRouter