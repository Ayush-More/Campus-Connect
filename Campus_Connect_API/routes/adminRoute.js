const express = require("express");
const adminController = require("../controller/adminController");
const authController = require("../controller/authController");

const Router = express.Router();

Router.use(authController.protect);

Router.get("/notes", adminController.AllNotes)
  .post("/add_mentor", adminController.AddMentor)
  .get("/mentor", adminController.AllMentor)
  .get("/user", adminController.AllUser)
  .post("/add_event", adminController.AddEvent)
  .get("/event", adminController.AllEvent)
  .get("/delete_notes", adminController.deleteNotes)
  .get("/delete_user", adminController.deleteUser)
  .get("/delete_event", adminController.deleteEvent);

module.exports = Router;
