const express = require("express");
const pool = require("../../config/db");
const authMiddleware = require("../../middleware/middleware");

const router = express.Router();

// Kullanıcı bilgilerini güncelle
router.patch("/updateUser", authMiddleware, async (req, res) => {
  const { id } = req.user; // Token'den kullanıcı ID'si
  console.log("Token'den alınan kullanıcı ID'si:", id);

  console.log(req.body);
  const { isim, email, fotograf } = req.body;

  try {
    const query = `
      UPDATE users
      SET isim = $1, email = $2, fotograf = $3
      WHERE id = $4
      RETURNING id, isim, email, fotograf;
    `;

    const result = await pool.query(query, [isim, email, fotograf, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    res.json({
      user: result.rows[0],
      message: "Kullanıcı bilgileri güncellendi",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
