const pool = require('./db');

const jadwalModel = {
  async getAllJadwal() {
    const query = 'SELECT * FROM jadwal';
    const { rows } = await pool.query(query);
    return rows;
  },

  async getJadwalById(jadwalId) {
    const query = 'SELECT * FROM jadwal WHERE jadwalId = $1';
    const { rows } = await pool.query(query, [jadwalId]);
    return rows[0];
  },

  async createJadwal(agendaId, proyekId) {
    const query = 'INSERT INTO jadwal (agendaId, proyekId) VALUES ($1, $2) RETURNING *';
    const { rows } = await pool.query(query, [agendaId, proyekId]);
    return rows[0];
  },

  async deleteJadwal(jadwalId) {
    const query = 'DELETE FROM jadwal WHERE jadwalId = $1';
    await pool.query(query, [jadwalId]);
    return true;
  },
};

module.exports = jadwalModel;