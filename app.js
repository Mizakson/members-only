const express = require("express")
const path = require("path")
const app = express()

require("dotenv").config()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath))

const indexRouter = require("./routes/indexRouter")

app.get("/", indexRouter)

const PORT = 3000
app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on http://localhost:${PORT}`)
})