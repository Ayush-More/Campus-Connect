const mongoose = require("mongoose");
const slugify = require("slugify");

const notesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the book is required"],
    trim: true,
  },
  //Help in url and is user freindly
  slug: String,
  Link: {
    type: String,
    required: [true, "The location of the book is required"],
  },
  type: {
    type: String,
    enum: ["AI", "ML", "Data_Science", "DSA"],
    required: [true, "The type of the book is required"],
  },
  rating: {
    type: Number,
    default: 3.5,
    min: 1,
    max: 5,
  },
  discription: {
    type: String,
    trim: true,
  },
  Writer: {
    type: String,
    default: "unknown",
  },
  pages: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
notesSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const notes = mongoose.model("notes", notesSchema);
module.exports = notes;
