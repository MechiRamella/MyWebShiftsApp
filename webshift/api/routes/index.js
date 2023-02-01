const express = require("express");
const router = express.Router();
const User = require("./user");
const Branch = require("./branch")

router.use("/user", User)
router.use("/branch", Branch)

module.exports = router;
