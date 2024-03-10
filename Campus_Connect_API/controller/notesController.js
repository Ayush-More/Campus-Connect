const multer = require("multer");
const notes = require("../model/notesModel");
//const AppError = require("../utility/AppError");
const catchAsync = require("../utility/catchAsync");
const factory = require("./handleFactory");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "F:/Workspace/Personel project/chat app/campus_connect-frontend/src/assets/pdf"
    );
  },
  filename: function (req, file, cb) {
    const fileSuffix = Date.now();
    const filename = file.fieldname + fileSuffix;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });
exports.getPdf = upload.single("Pdf");

exports.uploadPdf = catchAsync(async (req, res) => {
  console.log(
    req.body.Title,
    req.body.Category,
    req.body.SubCategory,
    req.file.filename,
    req.body.discription
  );
  if (
    req.body.Title &&
    req.body.Category &&
    req.body.SubCategory &&
    req.file.filename
  ) {
    console.log("All value exist");
  }
  const note = await notes.create({
    Title: req.body.Title,
    Category: req.body.Category,
    SubCategory: req.body.SubCategory,
    Pdf: req.file.filename,
    discription: req.body.discription,
  });
  console.log(note);
  res.status(200).json({
    status: "success",
    data: note,
  });
});

exports.FavouritePdf = catchAsync(async (req, res) => {
  try {
    const FavouriteList = req.body.list;
  } catch (error) {
    console.log(error);
  }
});
exports.GetNotesBytype = catchAsync(async (req, res) => {
  const requestedType = req.params.type;
  // Syntax to directly find by database
  //const cursor = db.collection('myCollection').find({ field: 'value' });
  const notesByType = await notes.find({ type: requestedType });
  res.status(400).json({
    status: "success",
    size: notesByType.length,
    data: notesByType,
  });
});

exports.getAllNotess = catchAsync(async (req, res) => {
  const note = await notes.find();
  res.status(200).json({
    status: "success",
    data: note,
  });
});

// exports.getAllNotess = factory.getAll(notes);
exports.getNotes = factory.getOne(notes);
exports.createNotes = factory.createOne(notes);
exports.updateNotes = factory.updateOne(notes);
exports.deleteNotes = factory.deleteOne(notes);
