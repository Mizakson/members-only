const pool = require("./pool")

exports.getAllUsers = async () => {
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

exports.addUser = async (firstName, lastName, username, password) => {
    await pool.query("INSERT INTO users (first_name, last_name, username, password, membership_status) VALUES ($1, $2, $3, $4, $5)", 
        [firstName, lastName, username, password, "FALSE"])
}

exports.addMember = async (user_id) => {
    await pool.query("UPDATE users SET membership_status = true WHERE id = $1", [user_id])
}