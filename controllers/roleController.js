const roleRepository = require('../repositories/roleRepository');

const addRole = async (req, res) => {
  try {
    const role = await roleRepository.addRole(req.body);
    res.status(201).json({ roleId: role.roleId, roleName: role.roleName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleRepository.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRole,
  getAllRoles,
};
