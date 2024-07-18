const User = require('../models/user');

const addUser = async (userData) => {
  return await User.create(userData);
};

const getUserByUsername = async (userName) => {
  return await User.findOne({ where: { userName } });
};

const getUserById = async (userId) => {
  return await User.findByPk(userId);
};

module.exports = {
  addUser,
  getUserByUsername,
  getUserById,
};
