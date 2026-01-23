const express = require("express");
const productRoutes = require("./routes/products.routes");
const connectDB = require("./config/db");
const cacheInstance = require("./services/cache.service");

const app = express();


cacheInstance.on("connect", () => {
  console.log("Connected to Redis cache");
});

cacheInstance.on("error", (err) => {
  console.log("Redis error:", err);
});

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(3000, () => {
connectDB();
  console.log("Server is running on port 3000");
});
