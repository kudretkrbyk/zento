const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const authMiddleware = async (req, res, next) => {
  console.log("authMiddleware çalıştı");
  const token = req.cookies.token; // Çerezdeki token'ı al

  if (!token) {
    return res
      .status(401)
      .json({ message: "Erişim reddedildi. Token gerekli." });
  }

  try {
    // Token'i çöz
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id; // Token'den gelen kullanıcı ID'sini al

    // Kullanıcıyı veritabanından sorgula
    const result = await pool.query("SELECT id, rol FROM users WHERE id = $1", [
      userId,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı." });
    }

    // Kullanıcı bilgilerini req.user'a ekle
    req.user = result.rows[0];
    next(); // Sonraki middleware'e devam et
  } catch (error) {
    console.error("authMiddleware error:", error);
    return res
      .status(403)
      .json({ message: "Geçersiz veya süresi dolmuş token." });
  }
};

module.exports = authMiddleware;
