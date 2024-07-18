const { body, validationResult } = require("express-validator");

const registerUser = [
  body("userName").isString().notEmpty(),
  body("password").isString().notEmpty().isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const loginUser = [
  body("userName").isString().notEmpty(),
  body("password").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const addRole = [
  body("roleName").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const addUserBasicInfo = [
  body("firstName").isString().notEmpty(),
  body("lastName").isString().notEmpty(),
  body("mobileNumber").isString().notEmpty(),
  body("userId").isInt(),
  body("roleId").isInt(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  registerUser,
  loginUser,
  addRole,
  addUserBasicInfo,
};
