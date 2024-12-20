// middleware/isAdmin.js
const isAdmin = (req, res, next) => {
  // Kullanıcı bilgilerini authMiddleware'den alıyoruz
  console.log("isAdmin", req.user);
  console.log("isAdminddd", req.user);
  if (!req.user || req.user.rol !== true) {
    // true değerine göre kontrol yapıyoruz
    return res
      .status(403)
      .json({ message: "Yetkisiz erişim: Admin yetkisi gerekli" });
  }

  next(); // Admin yetkisi varsa devam et
};

module.exports = isAdmin;
