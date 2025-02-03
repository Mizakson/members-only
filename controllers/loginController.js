exports.logInPostReq = () => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
}; 