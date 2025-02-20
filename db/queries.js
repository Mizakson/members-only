const pool = require("./pool")

// status -- 0 (non-member), 1 (member), 2 (admin)

exports.getAllUsers = async () => {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
};

// async function getAllMessages(username) {
//     const { rows } = await pool.query("SELECT * FROM messages WHERE username = $1", [username]);
//     return rows;
// };

// async function getAllMembers() {
//     const { rows } = await pool.query("SELECT * FROM users WHERE membership_status = TRUE")
//     return rows
// }

exports.addUser = async (firstName, lastName, username, password) => {
    await pool.query("INSERT INTO users (first_name, last_name, username, password, membership_status) VALUES ($1, $2, $3, $4, $5)", 
        [firstName, lastName, username, password, 0]);
};

// exports.getUserById = async (userId) => {
//     const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
//     return rows;
// };

exports.addMember = async (username) => {
    const { rows } = await pool.query("UPDATE users SET membership_status = 1 WHERE username = $1", [username]);
    return rows;
};

exports.makeMemberAdmin = async (username) => {
    const { rows } = await pool.query("UPDATE users SET membership_status = 2 WHERE username = $1", [username]);
    return rows;
};