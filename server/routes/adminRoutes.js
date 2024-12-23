// routes/adminRoutes.js
const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const authMiddleware = require("../middleware/middleware");

const router = express.Router();

router.get("/admin-only", authMiddleware, isAdmin, (req, res) => {
  res.json({ message: "Admin paneline erişim sağlandı." });
});

module.exports = router;
