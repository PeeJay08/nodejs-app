const UserModel = require("../models/user.entity");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class User {
  constructor() {
    this.secret = "QWERTYUIOP";
  }

  async login(username, password) {
    const user = await UserModel.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const parsedUser = JSON.parse(JSON.stringify(user));
      delete parsedUser.password;
      return jwt.sign(parsedUser, this.secret);
    } else {
      return "";
    }
  }
  async getUserIdByUsername(username) {
    try {
      const user = await UserModel.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (err) {
      throw err;
    }
  }
  async createUser(user) {
    const { username, password } = user;
    if (!username || !password) {
      throw new Error("Invalid request");
    }
    const existingUser = await UserModel.findOne({ username });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (existingUser) {
      throw new Error("Username is already taken");
    }
    const newUser = new UserModel({
      ...user,
      _id: uuidv4(),
      password: hash,
      budget: 0,
    });
    const savedUser = await newUser.save();
    return savedUser;
  }
}

module.exports = User;
