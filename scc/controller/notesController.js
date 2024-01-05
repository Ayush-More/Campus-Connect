const notes = require("../model/notesModel");
//const AppError = require("../utility/AppError");
const catchAsync = require("../utility/catchAsync");
const factory = require("./handleFactory");

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
  res.status(400).json({
    status: "success",

    data: note,
  });
});

// exports.getAllNotess = factory.getAll(notes);
exports.getNotes = factory.getOne(notes);
exports.createNotes = factory.createOne(notes);
exports.updateNotes = factory.updateOne(notes);
exports.deleteNotes = factory.deleteOne(notes);

exports.addNotes = catchAsync(async (req, res, next) => {
  const newNotes = await notes.create(req.body);
  console.log("success");

  res.status(201).json({
    status: "success",
    data: {
      notes: newNotes,
    },
  });
});
