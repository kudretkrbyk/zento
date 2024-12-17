const express = require("express");
const pool = require("../../config/db");
const router = express.Router();

// Yeni blog oluştur
router.post("/blogs", async (req, res) => {
  const { kategori_id, baslik, foto1, foto2, metin1, metin2 } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO blog_posts (kategori_id, baslik, foto1, foto2, metin1, metin2) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [kategori_id, baslik, foto1, foto2, metin1, metin2]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
