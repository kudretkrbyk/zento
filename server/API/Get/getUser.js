const express = require("express");
const authMiddleware = require("../../middleware/middleware");

const router = express.Router();

router.get("/user", authMiddleware, async (req, res) => {
  try {
    const user = req.user; // Token'den alınan kullanıcı bilgileri
    res.json({ message: "Korumalı rotaya erişildi.", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
