const passport = require("passport")

exports.logInPostReq = (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/", // incorrect login page here?
    })
}; 