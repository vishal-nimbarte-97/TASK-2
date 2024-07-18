const userRepository = require('../repositories/userRepository');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await userRepository.addUser({
      userName: req.body.userName,
      password: hashedPassword,
    });
    res.status(201).json({ userId: user.userId, userName: user.userName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userRepository.getUserByUsername(req.body.userName);

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error('Invalid credentials');
    }
    
    const token = jwt.sign({ userId: user.userId }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = await userRepository.getUserById(req.user.userId);
    if (!user) throw new Error('User not found');
    res.json({ userId: user.userId, userName: user.userName });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
