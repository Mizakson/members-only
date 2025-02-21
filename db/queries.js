const pool = require("./pool")

// queries for users
// status -- 1 (non-member), 2 (member), 3 (admin)

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
        [firstName, lastName, username, password, Number(1)]);
};

// exports.getUserById = async (userId) => {
//     const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
//     return rows;
// };

exports.addMember = async (username) => {
    const { rows } = await pool.query("UPDATE users SET membership_status = 2 WHERE username = $1", [username]);
    return rows;
};

exports.makeMemberAdmin = async (username) => {
    const { rows } = await pool.query("UPDATE users SET membership_status = 3 WHERE username = $1", [username]);
    return rows;
};

// queries for messages

exports.addMessage = async (title, text, id) => {
    const result = await pool.query(`
        INSERT INTO messages (message_title, message_text, user_id) VALUES ($1, $2, $3)
        RETURNING *;`, [title, text, id]);
    return result.rows[0];
};

exports.getMessages = async () => {
    const result = await pool.query(`
        SELECT messages.*, users.first_name, users.last_name
        FROM messages
        JOIN users ON messages.user_id = users.user_id;
        `);
    return result.rows;
};

exports.deleteMessage = async (id) => {
    const result = await pool.query(`
        DELETE FROM messages WHERE message_id = $1`, [id]);
    return result.rows[0];
};