import mongoose from "mongoose";

const mongoDbURL = "your mongodb url";

mongoose.connect(mongoDbURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

export default mongoose;
