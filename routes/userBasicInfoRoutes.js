const express = require('express');
const userBasicInfoController = require('../controllers/userBasicInfoController');
const authenticateToken = require('../middlewares/auth');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post('/', authenticateToken, validate.addUserBasicInfo, userBasicInfoController.addUserBasicInfo);
router.get('/', authenticateToken, userBasicInfoController.getUserBasicInfo);

module.exports = router;
