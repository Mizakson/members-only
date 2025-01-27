const pool = require("./pool")

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users")
    return rows
}

// async function getAllMessages() {
//     const { rows } = await pool.query("SELECT * FROM messages")
//     return rows
// }

// async function getAllMembers() {
//     const { rows } = await pool.query("SELECT * FROM users WHERE membership_status = TRUE")
//     return rows
// }

module.exports = {
    getAllUsers,
}