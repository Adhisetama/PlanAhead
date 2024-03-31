const pool = require('./db');

const proyekModel = {
  async getAllProyek() {
    const query = 'SELECT * FROM proyek';
    const { rows } = await pool.query(query);
    return rows;
  },

  async getProyekById(proyekId) {
    const query = 'SELECT * FROM proyek WHERE proyekId = $1';
    const { rows } = await pool.query(query, [proyekId]);
    return rows[0];
  },

  async createProyek(name, description, date, dateAlt1, dateAlt2) {
    const query = 'INSERT INTO proyek (name, description, date, dateAlt1, dateAlt2) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const { rows } = await pool.query(query, [name, description, date, dateAlt1, dateAlt2]);
    return rows[0];
  },

  async updateProyek(proyekId, name, description, date, dateAlt1, dateAlt2) {
    const query = 'UPDATE proyek SET name = $2, description = $3, date = $4, dateAlt1 = $5, dateAlt2 = $6 WHERE proyekId = $1 RETURNING *';
    const { rows } = await pool.query(query, [proyekId, name, description, date, dateAlt1, dateAlt2]);
    return rows[0];
  },

  async deleteProyek(proyekId) {
    const query = 'DELETE FROM proyek WHERE proyekId = $1';
    await pool.query(query, [proyekId]);
    return true;
  },
};

module.exports = proyekModel;