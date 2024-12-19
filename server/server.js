const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const getBlogs = require("./API/Get/getBlogs");
const postBlogs = require("./API/Post/postBlogs");
const getCategories = require("./API/Get/getCategories");
const getComment = require("./API/Get/getComment");
const postComment = require("./API/Post/postComment");

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// API Get Routes
app.use("/api", getBlogs);
app.use("/api", getComment);
app.use("/api", getCategories);

// API Post Routes
app.use("/api", postBlogs);
app.use("/api", postComment);
// Ana Route
app.get("/", (req, res) => {
  res.send("Blog API Server is running...");
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
