const { Router } = require("express");

const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.post("/add", messageController.addMessage);

module.exports = messageRouter;