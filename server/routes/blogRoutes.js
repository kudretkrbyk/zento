const express = require("express");
const router = express.Router();
const { getAll, getById } = require("../controllers/blogController");

router.route("/blogs").get(getAll);
router.route("/blogs/:id").get(getById);

module.exports = router;
