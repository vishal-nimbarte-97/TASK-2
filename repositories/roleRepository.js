const Role = require('../models/role');

const addRole = async (roleData) => {
  return await Role.create(roleData);
};

const getAllRoles = async () => {
  return await Role.findAll();
};

module.exports = {
  addRole,
  getAllRoles,
};
