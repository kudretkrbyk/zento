const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const getBlogs = require("./API/Get/getBlogs");
const postBlogs = require("./API/Post/postBlogs");
const getCategories = require("./API/Get/getCategories");
const getComment = require("./API/Get/getComment");
const postComment = require("./API/Post/postComment");
const getUser = require("./API/Get/getUser");
const logIn = require("./API/Post/logIn");
const registerUser = require("./API/Post/register");
const auth = require("./API/Get/auth");
const logOut = require("./API/Post/logOut");
const updateUser = require("./API/Post/updateUser");

dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5174", // Frontend'in çalıştığı URL
  credentials: true, // HttpOnly cookie'leri kabul etmek için
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:5174" })); // CORS ayarları
app.use(express.json());
app.use(cookieParser()); // Cookie-parser middleware

// API Get Routes
app.use("/api", getBlogs);
app.use("/api", getComment);
app.use("/api", getCategories);
app.use("/api", getUser);
app.use("/api", auth);

// API Post Routes
app.use("/api", postBlogs);
app.use("/api", postComment);
app.use("/api", logIn);
app.use("/api", registerUser);
app.use("/api", logOut);
app.use("/api", updateUser);
// Ana Route
app.get("/", (req, res) => {
  res.send("Blog API Server is running...");
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
