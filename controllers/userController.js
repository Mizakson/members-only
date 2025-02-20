const { validationResult } = require("express-validator");
const db = require("../db/queries");
const bcrypt = require("bcryptjs");

exports.createNewUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed",
            errors: errors.array(),
        });
    }

    try {
        const { firstname, lastname, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.addUser(firstname, lastname, username, hashedPassword);
        console.log(`USER ADDED: ${newUser}`);
        res.redirect("/");

    } catch (error) {
        console.error("User creation error", error);
        res.status(500).json({
            message: "An error occured while creating the user",
            error: error.message,
        });
    }
};

exports.makeUserMember = async (req, res) => {
    const username = req.locals.currentUser.username;
    const secretCode = req.body.secretCode;

    if (secretCode === process.env.MEMBER_SECRET_PASSWORD) {
        await db.addMember(username);
        console.log(`MEMBERSHIP STATUS GRANTED TO USER ${username}`);
        res.redirect("/");
    }
    else if (secretCode === process.env.ADMIN_SECRET_PASSWORD) {
        await db.makeMemberAdmin(username);
        console.log(`ADMIN STATUS GRANTED TO USER ${username}`);
        res.redirect("/");
    } else {
        res.status(500).json({
            message: "Incorrect passcode",
        });
    }
};