const express = require("express");
const user_login_controller = require("../controller/user_login_controller");

const router = express.Router();

router.post("/login", user_login_controller);

module.exports = router;
