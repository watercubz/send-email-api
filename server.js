import express from "express";
import bodyParser from "body-parser";
import userRouter from "./router/user.router.js";
import { valideMiddleware } from "./middleware/cors.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static("static"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(valideMiddleware());

const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is  running on port http://localhost:${PORT}`);
});
