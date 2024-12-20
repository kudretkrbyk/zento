const express = require("express");
const pool = require("../../config/db");

const router = express.Router();

// Tüm kullanıcıları listeleme (admin yetkisi gerektirir)
router.get("/users", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, isim, fotograf FROM users WHERE rol = false"
    );
    res.json({ users: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// Kullanıcı silme
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING id",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    res.json({ message: "Kullanıcı silindi" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
