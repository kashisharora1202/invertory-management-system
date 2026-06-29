const express = require("express");
const createuser_controller = require("../controller/user_controller");

const router = express.Router();

router.post("/user", createuser_controller);

module.exports = router;
