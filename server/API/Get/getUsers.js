const express = require("express");
const pool = require("../../config/db");
const authMiddleware = require("../../middleware");

const router = express.Router();

// Tüm kullanıcıları getir (Sadece admin yetkisiyle)
router.get("/users", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Yalnızca admin kullanıcılar bu işlemi yapabilir." });
  }

  try {
    const query = "SELECT id, isim, fotograf FROM users WHERE role = false"; // Admin harici kullanıcılar
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
