const userBasicInfoRepository = require('../repositories/userBasicInfoRepository');

const addUserBasicInfo = async (req, res) => {
  try {
    const info = await userBasicInfoRepository.addUserBasicInfo(req.body);
    res.status(201).json({ userBsInId: info.userBsInId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserBasicInfo = async (req, res) => {
  try {
    const info = await userBasicInfoRepository.getUserBasicInfoByUserId(req.user.userId);
    if (!info) throw new Error('Basic info not found');
    res.json(info);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  addUserBasicInfo,
  getUserBasicInfo,
};
