import express from "express";
import bodyParser from "body-parser";
import userRouter from "./router/user.router.js";
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);

const PORT = process.env.PORT ?? 4000;

const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`server is  running on port http://localhost:${PORT}`);
});
