const pool = require('./db');

const agendaModel = {
  async getAllAgenda() {
    const query = 'SELECT * FROM agenda';
    const { rows } = await pool.query(query);
    return rows;
  },

  async getAgendaById(agendaId) {
    const query = 'SELECT * FROM agenda WHERE agendaId = $1';
    const { rows } = await pool.query(query, [agendaId]);
    return rows[0];
  },

  async createAgenda(userId, proyekId, name, description, date, dateAlt1, dateAlt2) {
    const query = 'INSERT INTO agenda (userId, proyekId, name, description, date, dateAlt1, dateAlt2) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const { rows } = await pool.query(query, [userId, proyekId, name, description, date, dateAlt1, dateAlt2]);
    return rows[0];
  },

  async updateAgenda(agendaId, userId, proyekId, name, description, date, dateAlt1, dateAlt2) {
    const query = 'UPDATE agenda SET userId = $2, proyekId = $3, name = $4, description = $5, date = $6, dateAlt1 = $7, dateAlt2 = $8 WHERE agendaId = $1 RETURNING *';
    const { rows } = await pool.query(query, [agendaId, userId, proyekId, name, description, date, dateAlt1, dateAlt2]);
    return rows[0];
  },

  async deleteAgenda(agendaId) {
    const query = 'DELETE FROM agenda WHERE agendaId = $1';
    await pool.query(query, [agendaId]);
    return true;
  },
};

module.exports = agendaModel;