import cors from "cors";

const ACCEPTED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:4000",
  "http://localhost:3000",
  "172.18.149",
];

export const valideMiddleware = (accepteorigins = ACCEPTED_ORIGINS) =>
  cors({
    origin: (origin, callback) => {
      if (accepteorigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });
