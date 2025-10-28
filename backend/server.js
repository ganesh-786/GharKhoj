import express from "express";
import dotenv from "dotenv";
import router from "./routes/route.js";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use("/api/user", router);

app.listen(PORT, (req, res) => {
  console.log(`app running at http://localhost:${PORT}`);
});
