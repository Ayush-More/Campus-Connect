const express = require("express");
const chatController = require("../controller/chatController");
const authorization = require("../controller/authController");

const router = express.Router();

/* GET users listing. */
router
  .get("/all", authorization.protect, chatController.fetchChats)
  .post("/chats", authorization.protect, chatController.CreateChat)
  .post(
    "/chats/:chatId/messages",
    authorization.protect,
    chatController.sendMessage
  )
  .get(
    "/chats/:chatId/messages",
    authorization.protect,
    chatController.getMessageHistory
  );
module.exports = router;
