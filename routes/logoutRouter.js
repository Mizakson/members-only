const { Router } = require("express")
const logOutRouter = Router()
const logOutController = require("../controllers/logoutController")

logOutRouter.get("/", logOutController.logOutGetReq)

module.exports = logOutRouter