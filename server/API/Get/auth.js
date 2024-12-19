const express = require("express");
const router = express.Router();
const pool = require("../../config/db");

const authMiddleware = require("../../middleware");

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const userQuery =
      "SELECT id,email, isim, rol, fotograf FROM users WHERE id = $1";
    const userResult = await pool.query(userQuery, [req.user.id]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı." });
    }

    res.json({ user: userResult.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası." });
  }
});

module.exports = router;
