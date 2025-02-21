const db = require("../db/queries");

exports.addMessage = async (req, res) => {
    const { title, message, user } = req.body;
    await db.addMessage(title, message, user);
    res.redirect("/");
};