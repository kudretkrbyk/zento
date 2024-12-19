const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../../config/db");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Email adresinin zaten kayıtlı olup olmadığını kontrol et
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res
        .status(400)
        .json({ message: "Bu email adresi zaten kullanılıyor" });
    }

    // Şifreyi hash'le
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Kullanıcıyı veritabanına kaydet
    const query = `
      INSERT INTO users (isim, email, password, rol)
      VALUES ($1, $2, $3, $4)
      RETURNING id, isim, email, rol
    `;
    const values = [name, email, hashedPassword, role || "false"];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "Kullanıcı başarıyla oluşturuldu",
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
