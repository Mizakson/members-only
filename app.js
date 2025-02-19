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
passport.use(
    new localStrategy(async (username, password, done) => {
        try {
            const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
            const user = rows[0];

            if (!user) return done(null, false, { message: "Incorrect username"});

            const match = await bcrypt.compare(password, user.password);
            if (!match) return done(null, false, { message: "Incorrect password"});
        
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        const user = rows[0];

        done(null, user);
    } catch(err) {
        done(err);
    }
})



// requests here


const PORT = 3000
app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on http://localhost:${PORT}`)
});