const express = require("express");
const {
  fetchAllUser,
  AccessChat,
  fetchChats,
  createGroupChat,
  groupExit,
  fetchGroups,
} = require("../controller/chatController");
const { protect } = require("../controller/authController");

const router = express.Router();

router.post("/", protect, AccessChat);
router.get("/", protect, fetchChats);
router.post("/createGroup", protect, createGroupChat);
router.get("/fetchGroups", protect, fetchGroups);
router.put("/groupExit", protect, groupExit);
router.get("/fetchUsers", protect, fetchAllUser);

module.exports = router;
