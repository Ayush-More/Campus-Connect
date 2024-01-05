const academic = require("../model/acedemicEvent");
const club = require("../model/clubEvent");
const personel = require("../model/personelEvent");
const catchAsync = require("../utility/catchAsync");

exports.monthEvent = catchAsync(async (req, res) => {
  //access the route parameter
  const SelectedMonth = req.params.month; //The data is always in the form of the String
  const SelectedYear = req.params.year;

  const clubEvents = await club.find({
    $expr: {
      $and: [
        {
          $eq: [
            {
              $month: {
                $dateFromString: {
                  dateString: "$date",
                  format: "%d-%m-%Y",
                },
              },
            },
            parseInt(SelectedMonth, 10), // Convert SelectedMonth to an integer
          ],
        },
        {
          $eq: [
            {
              $year: {
                $dateFromString: {
                  dateString: "$date",
                  format: "%d-%m-%Y",
                },
              },
            },
            parseInt(SelectedYear, 10), // Convert SelectedDay to an integer
          ],
        },
      ],
    },
  });

  const academicEvents = await academic.find({
    $expr: {
      $and: [
        {
          $eq: [
            {
              $month: {
                $dateFromString: {
                  dateString: "$date",
                  format: "%d-%m-%Y",
                },
              },
            },
            parseInt(SelectedMonth, 10), // Convert SelectedMonth to an integer
          ],
        },
        {
          $eq: [
            {
              $year: {
                $dateFromString: {
                  dateString: "$date",
                  format: "%d-%m-%Y",
                },
              },
            },
            parseInt(SelectedYear, 10), // Convert SelectedDay to an integer
          ],
        },
      ],
    },
  });

  res.status(200).json({
    status: "Success",
    ClubEventLength: clubEvents.length,
    AcademicEventLength: academicEvents.length,
    data: {
      AcademicEvents: academicEvents,
      ClubEvents: clubEvents,
    },
  });

  //Agregate pipeline is used which filter the data in stages
});

exports.dayEvent = catchAsync(async (req, res) => {
  const SelectedMonth = req.params.month;
  const SelectedYear = req.params.year;
  const SelectedDay = req.params.day;

  const SelectedDate = `${SelectedDay}-${SelectedMonth}-${SelectedYear}`;

  const allClubEvents = await club.find();
  const allAcademicEvents = await academic.find();

  const clubEvent = allClubEvents.filter(
    (event) => event.date === SelectedDate,
  );
  const academicEvent = allAcademicEvents.filter(
    (event) => event.date === SelectedDate,
  );
  res.status(400).json({
    status: "Success",
    ClubEventlength: clubEvent.length,
    AcademicEventLength: academicEvent.length,
    data: {
      AcademicEvent: academicEvent,
      clubEvent: clubEvent,
    },
  });
});
exports.createEvent = catchAsync(async (req, res, next) => {
  const newEvent = await personel.create(req.body);
  console.log("success");

  res.status(201).json({
    status: "success",
    data: {
      event: newEvent,
    },
  });
});
