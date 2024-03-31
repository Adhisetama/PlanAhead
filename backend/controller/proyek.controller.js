const proyekModel = require('../model/proyek.model');

const proyekController = {
  async getProyek(req, res) {
    try {
      const proyek = await proyekModel.getAllProyek();
      res.json(proyek);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async createProyek(req, res) {
    const { name, description, date, dateAlt1, dateAlt2 } = req.body;
    try {
      const newProyek = await proyekModel.createProyek(name, description, date, dateAlt1, dateAlt2);
      res.status(201).json(newProyek);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateProyek(req, res) {
    const { proyekId } = req.params;
    const { name, description, date, dateAlt1, dateAlt2 } = req.body;
    try {
      const updatedProyek = await proyekModel.updateProyek(proyekId, name, description, date, dateAlt1, dateAlt2);
      res.json(updatedProyek);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deleteProyek(req, res) {
    const { proyekId } = req.params;
    try {
      await proyekModel.deleteProyek(proyekId);
      res.json({ message: 'Proyek deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = proyekController;