const pool = require('./db');

const userModel = {
  async getAllUsers() {
    const query = 'SELECT * FROM "user"';
    const { rows } = await pool.query(query);
    return rows;
  },

  async getUserById(userId) {
    const query = 'SELECT * FROM "user" WHERE userId = $1';
    const { rows } = await pool.query(query, [userId]);
    return rows[0];
  },

  async createUser(username, password, email, noHp) {
    const query = 'INSERT INTO "user" (username, password, email, noHp) VALUES ($1, $2, $3, $4) RETURNING *';
    const { rows } = await pool.query(query, [username, password, email, noHp]);
    return rows[0];
  },

  async updateUser(userId, username, password, email, noHp) {
    const query = 'UPDATE "user" SET username = $2, password = $3, email = $4, noHp = $5 WHERE userId = $1 RETURNING *';
    const { rows } = await pool.query(query, [userId, username, password, email, noHp]);
    return rows[0];
  },

  async deleteUser(userId) {
    const query = 'DELETE FROM "user" WHERE userId = $1';
    await pool.query(query, [userId]);
    return true;
  },
};

module.exports = userModel;