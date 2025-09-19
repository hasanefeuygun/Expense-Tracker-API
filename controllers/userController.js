const service = require("../services/auth.service");

module.exports = {
  signUpUser: async (req, res) => {
    try {
      if (!req.body.email || !req.body.password) {
        throw new Error("Please enter valid information!");
      }
      const newUser = await service.signUp({
        email: req.body.email,
        password: req.body.password,
      });
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await service.getAllUsers();
      res.json(allUsers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
