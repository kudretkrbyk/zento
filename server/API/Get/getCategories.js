const express = require("express");
const pool = require("../../config/db");
const router = express.Router();

// Tüm blogları getir
router.get("/categories", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories");
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
