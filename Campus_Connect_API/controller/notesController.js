const multer = require("multer");
const path = require("path");
const notes = require("../model/notesModel");
//const AppError = require("../utility/AppError");
const catchAsync = require("../utility/catchAsync");
const factory = require("./handleFactory");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "F:/Workspace/Personel project/chat app/Campus-Connect/campus_connect-frontend/src/assets/pdf"
    );
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const extname = path.extname(file.originalname);

    const filename = file.fieldname + uniqueSuffix + extname;
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
    const documents = await notes.find({ _id: { $in: FavouriteList } }); // Assuming YourModel is your Mongoose model
    res.status(200).json({
      status: "success",
      data: documents,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
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
