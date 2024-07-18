const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post('/register', validate.registerUser, userController.registerUser);
router.post('/login', validate.loginUser, userController.loginUser);
router.get('/info', authenticateToken, userController.getUserInfo);

module.exports = router;
