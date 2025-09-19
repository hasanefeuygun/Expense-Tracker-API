require("dotenv").config();
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  signUp: async ({ email, password }) => {
    if (await userModel.findOne({ email })) {
      throw new Error("This email already exists.");
    }
    const passwordHash = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );
    console.log("Salt rounds -> ", process.env.SALT_ROUNDS);
    const newUser = await userModel.create({ email, password: passwordHash });
    return newUser;
  },
  getAllUsers: async () => {
    const allUsers = await userModel.find({});
    return allUsers;
  },
  deleteAccount: async (email) => {
    const deletedAccount = await userModel.findOneAndDelete({ email });
    if (!deletedAccount) {
      throw new Error("User already doesn't exist");
    }
    return deletedAccount;
  },
};
