const express = require("express");
const pool = require("../../config/db");
const router = express.Router();
// Yeni yorum ekle
router.post("/comments", async (req, res) => {
  const { blog_id, user_id, comment_text } = req.body;

  try {
    const query = `
        INSERT INTO comments (blog_id, user_id, comment_text) 
        VALUES ($1, $2, $3) 
        RETURNING *;
      `;
    const result = await pool.query(query, [blog_id, user_id, comment_text]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
