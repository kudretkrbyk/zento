const pool = require("../config/db");
const bcrypt = require("bcryptjs");

// Kullanıcı bilgilerini al
const getUser = async (req, res) => {
  try {
    const userQuery = `
      SELECT id, email, isim, fotograf, rol 
      FROM users 
      WHERE id = $1
    `;
    const userResult = await pool.query(userQuery, [req.user.id]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({ user: userResult.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Tüm kullanıcıları listele (Admin haricindeki kullanıcılar)
const getUsers = async (req, res) => {
  try {
    const query = `
      SELECT id, isim, fotograf 
      FROM users 
      WHERE rol = false
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Kullanıcı kaydı
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const query = `
      INSERT INTO users (isim, email, password, rol)
      VALUES ($1, $2, $3, $4)
      RETURNING id, isim, email, rol
    `;
    const values = [name, email, hashedPassword, role || false];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "User successfully registered.",
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Kullanıcı bilgilerini güncelle
const updateUser = async (req, res) => {
  const { id } = req.user;
  const { isim, email, fotograf } = req.body;

  try {
    const query = `
      UPDATE users
      SET isim = $1, email = $2, fotograf = $3
      WHERE id = $4
      RETURNING id, isim, email, fotograf
    `;
    const result = await pool.query(query, [isim, email, fotograf, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({
      user: result.rows[0],
      message: "User information updated.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { getUser, getUsers, registerUser, updateUser };
