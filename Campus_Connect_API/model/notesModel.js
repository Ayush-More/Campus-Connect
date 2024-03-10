const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "The name of the book is required"],
    trim: true,
  },
  Category: {
    type: String,
    isRequired: true,
    enum: ["Subject", "Development", "DSA"],
    default: "Subject",
  },
  SubCategory: {
    type: [String],
    isRequired: true,
  },
  Pdf: {
    type: String,
  },
  discription: {
    type: String,
    trim: true,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const notes = mongoose.model("notes", notesSchema);
module.exports = notes;
