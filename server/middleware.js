const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Çerezdeki token'ı al

  if (!token) {
    return res
      .status(401)
      .json({ message: "Erişim reddedildi. Token gerekli." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Kullanıcı bilgilerini req'e ekle
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Geçersiz veya süresi dolmuş token." });
  }
};

module.exports = authMiddleware;
