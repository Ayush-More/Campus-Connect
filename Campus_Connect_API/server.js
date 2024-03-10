const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const tnpModel = require("./model/tnpModel");
dotenv.config({ path: "./config.env" });
const app = require("./app");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// This function is executed when an unhandled rejection occurs that does not have .catch or .then
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // Gracefully shut down the server
  server.close(() => {
    process.exit(1); // Exit the application with a non-zero status code
  });
});

// Import  data
const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "tnp.json"), "utf-8")
);

const importData = async () => {
  try {
    await tnpModel.create(jsonData);
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};
// console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
}
