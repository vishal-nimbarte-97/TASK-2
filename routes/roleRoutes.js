const express = require('express');
const roleController = require('../controllers/roleController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post('/', validate.addRole, roleController.addRole);
router.get('/', roleController.getAllRoles);

module.exports = router;
