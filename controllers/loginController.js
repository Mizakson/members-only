const passport = require("passport")

exports.logInPostReq = (req, res) => {
    passport.authenticate("local", {
      successRedirect: res.send("LOGIN SUCCESS!"),
      failureRedirect: "/", // incorrect login page here?
    })
}; 