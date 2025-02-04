const { Router } = require("express")
const indexRouter = Router()

const { indexPageGet } = require("../controllers/indexController")
const { signUpPageGet, signUpPagePost } = require("../controllers/signUpController")

indexRouter.get("/", indexPageGet)
indexRouter.get("/sign-up", signUpPageGet)

indexRouter.post("/sign-up", signUpPagePost)

module.exports = indexRouter