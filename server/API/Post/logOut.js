const express = require("express");
const router = express.Router();

// Logout Endpoint
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true, // Tarayıcı erişimini engeller
    secure: process.env.NODE_ENV === "production", // HTTPS için gereklidir
    sameSite: "strict", // CSRF saldırılarına karşı koruma
  });
  res.json({ message: "Çıkış başarılı" });
});

module.exports = router;
