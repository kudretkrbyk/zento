const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5174", // Frontend'in çalıştığı URL
  credentials: true, // HttpOnly cookie'leri kabul etmek için
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;

// Middleware

app.use(express.json());
app.use(cookieParser()); // Cookie-parser middleware
app.use(express.urlencoded({ extended: true }));

app.use("/api", blogRoutes); // Blog rotaları
app.use("/api", categoryRoutes); // Kategori rotaları
app.use("/api", userRoutes); // Kullanıcı rotaları
app.use("/api", authRoutes); // Auth rotaları

app.use("/api", adminRoutes); // Admin rotaları

// Ana Route
app.get("/", (req, res) => {
  res.send("Blog API Server is running...");
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
