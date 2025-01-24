const { Render } = require("ejs")

async function indexPageGet(req, res) {
    // query here
    console.log("db query here...")
    res.send("HOMEPAGE...")
}

module.exports = {
    indexPageGet
}