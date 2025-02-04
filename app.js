const path = require("node:path");
require("dotenv").config()
const express = require("express");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session)
const passport = require("passport")
const pool = require("./db/pool");
const indexRouter = require("./routes/indexRouter");

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath))

app.use(session({
    store: new (pgSession)({
        pool: pool,
    }),
    secret: process.env.COOKIE_SECRET, 
    resave: false, 
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

const PORT = 3000
app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on http://localhost:${PORT}`)
})