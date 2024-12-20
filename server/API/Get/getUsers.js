const express = require("express");
const pool = require("../../config/db");
const authMiddleware = require("../../middleware/middleware");
const isAdmin = require("../../middleware/isAdmin");

const router = express.Router();

router.get("/users", authMiddleware, isAdmin, async (req, res) => {
  try {
    const query = "SELECT id, isim, fotograf FROM users WHERE role = false"; // Admin harici kullanıcıları getir
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
