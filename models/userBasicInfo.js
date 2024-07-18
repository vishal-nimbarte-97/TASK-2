const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Role = require('./role');

const UserBasicInfo = sequelize.define('UserBasicInfo', {
  userBsInId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

UserBasicInfo.belongsTo(User, { foreignKey: 'userId' });
UserBasicInfo.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = UserBasicInfo;

