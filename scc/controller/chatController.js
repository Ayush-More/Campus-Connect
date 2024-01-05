// eslint-disable-next-line import/no-extraneous-dependencies
const catchAsync = require("../utility/catchAsync");
const Chat = require("../model/chatModel");
const Message = require("../model/messageModel");
const User = require("../model/userModel");
const { io } = require("../app");

//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected
exports.CreateChat = catchAsync(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  let isChat = await Chat.find({
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password", "-passwordConfirm")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    const chatData = {
      chatName: `${req.user._id}-${userId}`,
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password",
        "-passwordConfirm"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
exports.allUsers = catchAsync(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//@description     Fetch all chats for a user
//@route           GET /api/chat/
//@access          Protected
exports.fetchChats = catchAsync(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

exports.sendMessage = catchAsync(async (req, res) => {
  try {
    const { chatId } = req.params;
    const { content } = req.body;

    // Check if the chat exists
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Create a new message
    const newMessage = await Message.create({
      sender: req.user._id,
      content,
      chat: chatId,
    });

    // Update the chat's latestMessage field
    chat.latestMessage = newMessage._id;
    await chat.save();

    io.to(chatId).emit("message", newMessage);
    return res.status(201).json({ message: newMessage });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

exports.getMessageHistory = catchAsync(async (req, res) => {
  try {
    const { chatId } = req.params;

    // Check if the chat exists
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Retrieve message history for the chat
    const messageHistory = await Message.find({ chat: chatId })
      .populate({
        path: "sender",
        select: "name",
      })
      .select("content");

    return res.status(200).json({ messages: messageHistory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
