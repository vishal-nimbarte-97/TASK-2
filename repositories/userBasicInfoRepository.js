const UserBasicInfo = require('../models/userBasicInfo');

const addUserBasicInfo = async (infoData) => {
  return await UserBasicInfo.create(infoData);
};

const getUserBasicInfoByUserId = async (userId) => {
  return await UserBasicInfo.findOne({ where: { userId } });
};

module.exports = {
  addUserBasicInfo,
  getUserBasicInfoByUserId,
};
