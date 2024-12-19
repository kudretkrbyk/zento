const express = require("express");
const pool = require("../../config/db");
const router = express.Router();
// Belirli bir blog için yorumları getir
router.get("/blogs/:id/comments", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
        SELECT 
          comments.id, 
          comments.comment_text, 
          comments.created_at, 
          users.isim AS user_name, 
          users.fotoğraf AS user_photo
        FROM comments
        LEFT JOIN users ON comments.user_id = users.id
        WHERE comments.blog_id = $1
        ORDER BY comments.created_at DESC;
      `;
    const result = await pool.query(query, [id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
