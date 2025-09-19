const service = require("../services/auth.service");

module.exports = {
  signUpUser: async (req, res) => {
    try {
      if (!req.body.email || !req.body.password) {
        throw new Error("Please enter valid email or password!");
      }
      const newUser = await service.signUp({
        email: req.body.email.trim().toLowerCase(),
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
  deleteAccount: async (req, res) => {
    try {
      if (!req.body.email) {
        throw new Error("This email doesn't exist");
      }
      const deletedAccount = await service.deleteAccount(req.body.email);
      res.json({ "Deleted Account": deletedAccount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
