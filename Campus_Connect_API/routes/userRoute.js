const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.use(authController.protect);
router.get("/logout", authController.logout);
router.post("/changePassword", authController.updatePassword);

module.exports = router;
