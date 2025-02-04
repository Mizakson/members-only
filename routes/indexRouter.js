const { Router } = require("express")
const indexRouter = Router()

const indexController = require("../controllers/indexController")
const loginController = require("../controllers/loginController")
const logoutController = require("../controllers/logoutController")
const signUpController = require("../controllers/signUpController")

const loginRouter = require("./loginRouter")
const logoutRouter = require("./logoutRouter")
const signUpPageRouter = require("./signUpRouter")

indexRouter.get("/", indexController.indexPageGet)

indexRouter.post("/log-in", loginController.logInPostReq)

module.exports = indexRouter