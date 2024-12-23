const express = require("express");
const pool = require("../config/db");

const getAll = async (req, res) => {
  try {
    const query = `
        SELECT 
            blog_posts.id, 
            categories.kategori_adi AS kategori, 
            blog_posts.baslik, 
            blog_posts.foto1, 
            blog_posts.foto2, 
            blog_posts.metin1, 
            blog_posts.metin2, 
            blog_posts.created_at,
            users.isim AS yazar_adi, 
            users.fotograf AS yazar_foto
        FROM blog_posts
        LEFT JOIN categories ON blog_posts.kategori_id = categories.id
        LEFT JOIN users ON blog_posts.user_id = users.id
        ORDER BY blog_posts.created_at DESC
        `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
        SELECT 
            blog_posts.id, 
            categories.kategori_adi AS kategori, 
            blog_posts.baslik, 
            blog_posts.foto1, 
            blog_posts.foto2, 
            blog_posts.metin1, 
            blog_posts.metin2, 
            blog_posts.created_at,
            users.isim AS yazar_adi, 
            users.fotoğraf AS yazar_foto
        FROM blog_posts
        LEFT JOIN categories ON blog_posts.kategori_id = categories.id
        LEFT JOIN users ON blog_posts.user_id = users.id
        WHERE blog_posts.id = $1
        `;
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) return res.status(404).send("Blog not found");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
const addData = async (req, res) => {
  try {
    const { kategori_id, baslik, foto1, foto2, metin1, metin2 } = req.body;
    const result = await pool.query(
      "INSERT INTO blog_posts (kategori_id, baslik, foto1, foto2, metin1, metin2) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [kategori_id, baslik, foto1, foto2, metin1, metin2]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getAll, getById, addData };
