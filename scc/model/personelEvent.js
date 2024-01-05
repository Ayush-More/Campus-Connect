const mongoose = require("mongoose");

const personelEventSchema = new mongoose.Schema({
  Title: {
    type: String,
    trim: true,
    uppercase: true,
    required: [true, "The title is required"],
  },
  time: {
    type: String,
    validate: {
      validator: function (value) {
        const TimeFormat = /^\d{2}-\d{2}-\d{2}$/;
        return TimeFormat.test(value);
      },
      message: "Invalid time format .Use HH:MM:SS",
    },
  },
  conferenceLink: {
    type: String,
  },
  discription: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  attachment: {
    type: String,
  },
});

const personel = mongoose.model("personel", personelEventSchema);
module.exports = personel;
