exports.logInPostReq = () => (
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  ); 
  
exports.logOutGetReq = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}