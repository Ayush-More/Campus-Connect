const express = require("express");

const router = express.Router();
const notesController = require("../controller/notesController");
const authController = require("../controller/authController");

router.use(authController.protect);

/* GET users listing. */
router
  .get("/:type", notesController.GetNotesBytype)
  .get("/", notesController.getAllNotess)
  .post("/addNotes", notesController.addNotes);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .patch(notesController.updateNotes)
  .get(notesController.getNotes)
  .delete(notesController.deleteNotes);
router.post("/", notesController.createNotes);

module.exports = router;
