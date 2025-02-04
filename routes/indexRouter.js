const { Router } = require("express")
const indexRouter = Router()

const { indexPageGet } = require("../controllers/indexController")
const { signUpPageGet, signUpPagePost } = require("../controllers/signUpController")
const { logInGetReq, logInPostReq } = require("../controllers/loginController")

indexRouter.get("/", indexPageGet)
indexRouter.get("/sign-up", signUpPageGet)
indexRouter.get("/log-in", logInGetReq)

indexRouter.post("/sign-up", signUpPagePost)
indexRouter.post("/log-in", logInPostReq)

module.exports = indexRouter