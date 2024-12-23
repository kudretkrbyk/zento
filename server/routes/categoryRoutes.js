const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/categoryController");
router.route("/categories").get(getAll);
module.exports = router;
