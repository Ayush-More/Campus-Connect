const asyncHandler = require("express-async-handler");
const Chat = require("../model/chatModel");
const User = require("../model/userModel");
const Mentor = require("../model/mentorModel");

const fetchAvailableMentors = asyncHandler(async (req, res) => {
  try {
    const mentors = await User.find({ role: "mentor" });
    const finalMentor = [];

    for (const mentor of mentors) {
      const chat = await Chat.findOne({
        isGroupChat: false,
        users: { $all: [req.user._id, mentor._id] },
      });

      if (!chat) {
        finalMentor.push(mentor);
      }
    }

    res.status(200).json({
      status: "success",
      user: finalMentor, // Use 'user' for consistency
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

const CreateOneToOneChat = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById({ _id: userId });
    const chatData = {
      chatName: user.name,
      isGroupChat: false,
      users: [{ _id: req.user._id }, { _id: userId }],
    };
    const createdChat = await Chat.create(chatData);
    const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
      "users",
      "-password"
    );
    res.status(200).json({
      status: "success",
      FullChat,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

const AccessChat = async (req, res) => {
  try {
    const chatId = req.params.chat_id;
    let isChat = await Chat.findById(chatId)
      .populate({
        path: "users",
        select: "-password", // Exclude password field from users
      })
      .populate("latestMessage");
    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name email",
    });
    console.log(isChat);
    res.status(200).json({
      status: "success",
      isChat,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

const fetchChats = asyncHandler(async (req, res) => {
  try {
    // console.log("Fetch Chats aPI : ", req);
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name email",
        });
        res.status(200).json({
          status: "success",
          results,
        });
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const fetchGroups = asyncHandler(async (req, res) => {
  try {
    console.log(req.user._id);
    const userId = req.user._id;

    const availableGroups = await Chat.aggregate([
      { $match: { isGroupChat: true } },
      { $match: { users: { $nin: [userId] } } },
    ]);

    res.status(200).json({
      status: "success",
      group: availableGroups,
      length: availableGroups.length,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const fetchMentorDetail = asyncHandler(async (req, res) => {
  try {
    if (!req.params.mentor_id) {
      return res.status(400).send({ message: "Data is insufficient" });
    }
    const mentorId = req.params.mentor_id;
    const mentorDetail = await Mentor.findOne({ users: mentorId }).populate(
      "users"
    );
    res.status(200).json({
      status: "success",
      mentorDetail,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Data is insufficient" });
  }
  const { users } = req.body;
  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json({
      status: "success",
      fullGroupChat,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const fetchAllUser = async (req, res) => {
  try {
    const allUser = await User.find({ _id: { $ne: req.user._id } });
    res.status(200).json({
      status: "success",
      allUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const groupExit = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { chatId } = req.body;
    const userId = req.user._id;

    if (!chatId || !userId) {
      return res
        .status(400)
        .json({ message: "chatId and userId are required" });
    }

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    if (chat.isGroupChat) {
      // Remove user from group
      const updatedChat = await Chat.findByIdAndUpdate(
        chatId,
        { $pull: { users: userId } },
        { new: true }
      )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

      return res
        .status(200)
        .json({ message: "Chat updated successfully", updatedChat });
    }

    // Delete one-on-one chat
    await Chat.findByIdAndDelete(chatId);
    return res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

const addSelfToTheGroup = asyncHandler(async (req, res) => {
  const { chatId } = req.body;
  console.log(chatId);
  const userId = req.user._id;
  console.log(userId);
  // check if the requester is admin

  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.status(200).json({
      status: "success",
      added,
    });
  }
});

module.exports = {
  AccessChat,
  fetchChats,
  fetchGroups,
  createGroupChat,
  groupExit,
  fetchAvailableMentors,
  addSelfToTheGroup,
  CreateOneToOneChat,
  fetchAllUser,
  fetchMentorDetail,
};
