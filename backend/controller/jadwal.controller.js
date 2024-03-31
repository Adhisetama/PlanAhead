const jadwalModel = require('../model/jadwal.model');

const jadwalController = {
  async getJadwal(req, res) {
    try {
      const jadwal = await jadwalModel.getAllJadwal();
      res.json(jadwal);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async createJadwal(req, res) {
    const { agendaId, proyekId } = req.body;
    try {
      const newJadwal = await jadwalModel.createJadwal(agendaId, proyekId);
      res.status(201).json(newJadwal);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deleteJadwal(req, res) {
    const { jadwalId } = req.params;
    try {
      await jadwalModel.deleteJadwal(jadwalId);
      res.json({ message: 'Jadwal deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = jadwalController;