const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const socketio = require("socket.io");

dotenv.config({ path: "./config.env" });
const app = require("./app");
const tnpModel = require("./model/tnpModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
app.use(cors());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 5000;
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("A new user has connected", socket.id);
  socket.on("setup", (userId) => {
    console.log("Setup received:", userId);
    socket.join(userId);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("chat joined", room);
  });

  socket.on("new_messages", (newMessageStatus) => {
    const chat = newMessageStatus.chat;
    if (!chat.users) {
      return console.log("chat users not defined");
    }
    chat.users.forEach((user) => {
      if (user._id === newMessageStatus.sender._id) {
        return;
      }
      socket.in(user._id).emit("message recieved", newMessageStatus);
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

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

if (process.argv[2] === "--import") {
  importData();
}
