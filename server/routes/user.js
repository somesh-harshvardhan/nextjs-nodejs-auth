const express = require("express");
const { signin, register } = require("../controller/user-credentials");
const router = express.Router();

router.route("/signin").post(signin);
router.route("/register").post(register);

module.exports = router;
