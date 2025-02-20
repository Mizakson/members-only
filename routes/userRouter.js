const { Router } = require("express");
const { body } = require("express-validator");

const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.post("/sign-up", 
    [
        body("firstname").notEmpty().withMessage("Please enter a first name"),
        body("lastname").notEmpty().withMessage("Please enter a last name"),
        body("username").notEmpty().withMessage("Please enter a username"),
        body("password").isLength({ min: 6 }).withMessage("Password must be a minimum of 6 characters"),
        body("confirmpassword").custom((value, { req }) => value === req.body.password).withMessage("Passwords must match")
    ],
    userController.createNewUser
);
userRouter.post("/member", userController.makeUserMember);

module.exports = userRouter;