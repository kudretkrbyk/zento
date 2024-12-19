const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware");

router.get("/auth", authMiddleware, (req, res) => {
  res.json({ user: req.user }); // authMiddleware'den gelen kullanıcı bilgisi
});

module.exports = router;
