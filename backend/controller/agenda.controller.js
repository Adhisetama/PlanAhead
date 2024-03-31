const agendaModel = require('../model/agenda.model');

const agendaController = {
  async getAgenda(req, res) {
    try {
      const agenda = await agendaModel.getAllAgenda();
      res.json(agenda);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async createAgenda(req, res) {
    const { userId, proyekId, name, description, date, dateAlt1, dateAlt2 } = req.body;
    try {
      const newAgenda = await agendaModel.createAgenda(userId, proyekId, name, description, date, dateAlt1, dateAlt2);
      res.status(201).json(newAgenda);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateAgenda(req, res) {
    const { agendaId } = req.params;
    const { userId, proyekId, name, description, date, dateAlt1, dateAlt2 } = req.body;
    try {
      const updatedAgenda = await agendaModel.updateAgenda(agendaId, userId, proyekId, name, description, date, dateAlt1, dateAlt2);
      res.json(updatedAgenda);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deleteAgenda(req, res) {
    const { agendaId } = req.params;
    try {
      await agendaModel.deleteAgenda(agendaId);
      res.json({ message: 'Agenda deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = agendaController;