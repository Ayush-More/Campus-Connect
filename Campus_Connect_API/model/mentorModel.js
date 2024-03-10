const mongoose = require("mongoose");

const studentMentorSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  programmingLanguages: {
    type: [String],
    required: [
      true,
      "Please provide the programming languages the student mentor is proficient in",
    ],
  },
  mentoringSubjects: {
    type: [String],
    required: [
      true,
      "Please specify the subjects/topics the student mentor can mentor in",
    ],
  },
  bio: {
    type: String,
    required: [true, "Please provide a bio for the student mentor"],
  },
});

const StudentMentor = mongoose.model("StudentMentor", studentMentorSchema);

module.exports = StudentMentor;
