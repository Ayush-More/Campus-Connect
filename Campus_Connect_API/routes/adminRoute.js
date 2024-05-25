const express = require("express");
const adminController = require("../controller/adminController");
const authController = require("../controller/authController");

const Router = express.Router();

Router.use(authController.protect);

Router.get("/notes", adminController.AllNotes)
  .post("/add_mentor", adminController.AddMentor)
  .get("/mentor", adminController.AllMentor)
  .get("/user", adminController.AllUser)
  .post("/add_event", adminController.getimage, adminController.AddEvent)
  .get("/event", adminController.AllEvent)
  .get("/delete_notes/:id", adminController.deleteNotes)
  .get("/delete_user/:id", adminController.deleteUser)
  .get("/delete_event/:id", adminController.deleteEvent);

module.exports = Router;
