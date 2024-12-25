const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  registerUser,
  updateUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/middleware");
const isAdmin = require("../middleware/isAdmin");

// Kullanıcı bilgilerini al
router.get("/user", authMiddleware, getUser);

// Tüm kullanıcıları getir (Admin yetkisi gerektirir)
router.get("/users", authMiddleware, isAdmin, getUsers);

// Yeni kullanıcı oluştur
router.post("/register", registerUser);

// Kullanıcı bilgilerini güncelle
router.patch("/users/:id", authMiddleware, updateUser);

module.exports = router;
