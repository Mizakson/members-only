require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const pool = require("./db/pool");
const queries = require("./db/queries");
const app = express();

const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");


app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(session({
    secret: "tacos",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// localStrategy here


// requests here


const PORT = 3000
app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on http://localhost:${PORT}`)
});