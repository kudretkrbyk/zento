const express = require("express");
const pool = require("../../config/db");
const router = express.Router();

// Tüm blogları getir
router.get("/blogs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts");
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Tek bir blogu ID'ye göre getir
router.get("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM blog_posts WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) return res.status(404).send("Blog not found");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
