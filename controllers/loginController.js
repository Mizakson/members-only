const passport = require("passport")

exports.logInGetReq = (req, res) => {
  res.render("login")
}

exports.logInPostReq = () => {
    passport.authenticate("local", {
      successRedirect: "/log-in-success",
      failureRedirect: "/log-in-failure", // incorrect login page here?
    })
};

exports.logInSuccessGetReq = (req, res) => {
    res.render("login-success")
}

exports.logInFailureGetReq = (req, res) => {
    res.render("login-failure")
}