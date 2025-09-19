const userModel = require("../Models/userModel");

module.exports = {
  signUp: async ({ email, password }) => {
    if (await userModel.findOne({ email })) {
      throw new Error("This email already exists.");
    }
    const newUser = await userModel.create({ email, password });
    return newUser;
  },
  getAllUsers: async () => {
    const allUsers = await userModel.find({});
    return allUsers;
  },
};
