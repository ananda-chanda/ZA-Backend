require("dotenv").config();
const express = require("express");
const connectDB = require("./config/Db");
const authRoutes = require("./routes/AuthRoutes");
const applicationRoutes = require("./routes/ApplicationRoutes");
const userRoutes = require("./routes/UserRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/application", applicationRoutes);

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));