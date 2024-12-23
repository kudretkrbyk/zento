// routes/authRoutes.js
const express = require("express");
const {
  logIn,
  logOut,
  register,
  getAuth,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/middleware");

const router = express.Router();

router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/register", register);
router.get("/auth", authMiddleware, getAuth);

module.exports = router;
