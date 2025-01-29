const { Router } = require("express")
const membersRouter = Router()
const membersController = require("../controllers/membersController")

membersRouter.get("/", membersController.membersPageGet)
membersRouter.post("/", membersController.membersPagePost)

module.exports = membersRouter