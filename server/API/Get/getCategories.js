const express = require("express");
const pool = require("../../config/db");
const router = express.Router();

// Tüm kategorileri içerik sayılarıyla birlikte getir
router.get("/categories", async (req, res) => {
  try {
    const query = `
      SELECT 
        categories.id, 
        categories.kategori_adi, 
        categories.kategori_fotograf, 
        COUNT(blog_posts.id) AS blog_count
      FROM categories
      LEFT JOIN blog_posts ON categories.id = blog_posts.kategori_id
      GROUP BY categories.id
      ORDER BY categories.kategori_adi
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
