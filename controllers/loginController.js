const passport = require("passport")

exports.logInGetReq = (req, res) => {
  res.render("login")
}

exports.logInPostReq = (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/", // incorrect login page here?
    })
    return
}; 