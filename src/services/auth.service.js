require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt_secret = process.env.JWT_SECRET;
const jwt_expires_in = process.env.JWT_EXPIRES_IN;

module.exports = {
  signUp: async ({ email, password }) => {
    if (await userModel.findOne({ email }))
      throw new Error("This email already exists.");

    const passwordHash = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );

    const newUser = await userModel.create({ email, password: passwordHash });
    return newUser;
  },
  login: async (email, password) => {
    const user = await userModel.findOne({ email });
    if (!user) throw new Error("User not found!");

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) throw new Error("Invalid password!");

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      jwt_secret,
      { expiresIn: jwt_expires_in }
    );

    return { user, token };
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
  verifyToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error("Invalid or expired token!");
    }
  },
};
