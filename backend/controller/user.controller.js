const userModel = require('../model/user.model');

const userController = {
  async getUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async createUser(req, res) {
    const { username, password, email, noHp } = req.body;
    try {
      const newUser = await userModel.createUser(username, password, email, noHp);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateUser(req, res) {
    const { userId } = req.params;
    const { username, password, email, noHp } = req.body;
    try {
      const updatedUser = await userModel.updateUser(userId, username, password, email, noHp);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      await userModel.deleteUser(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = userController;