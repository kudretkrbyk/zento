// authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");

// Kullanıcı giriş işlemi
const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = "SELECT * FROM users WHERE email = $1";
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    const user = userResult.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Geçersiz şifre" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({
      message: "Giriş başarılı",
      user: {
        id: user.id,
        isim: user.isim,
        email: user.email,
        role: user.role,
        fotograf: user.fotograf,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

// Kullanıcı çıkış işlemi
const logOut = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.json({ message: "Çıkış başarılı" });
};

// Kullanıcı kaydı
const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res
        .status(400)
        .json({ message: "Bu email adresi zaten kullanılıyor" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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
};

// Kullanıcı kimlik doğrulama
const getAuth = async (req, res) => {
  try {
    const userQuery =
      "SELECT id, email, isim, fotograf, rol FROM users WHERE id = $1";
    const userResult = await pool.query(userQuery, [req.user.id]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı." });
    }

    res.json({ user: userResult.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası." });
  }
};

module.exports = { logIn, logOut, register, getAuth };
