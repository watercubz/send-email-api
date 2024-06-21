import mongoose from "mongoose";

const mongoDbURL =
  "mongodb+srv://watercubz:watercubzdev17@cluster0.jfgz6v2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
