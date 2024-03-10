const academic = require("../model/acedemicEvent");
const club = require("../model/clubEvent");
const personal = require("../model/personelEvent");
const catchAsync = require("../utility/catchAsync");

exports.monthEvent = catchAsync(async (req, res) => {
  const SelectedMonth = req.params.month;
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
            parseInt(SelectedMonth, 10),
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
            parseInt(SelectedYear, 10),
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
            parseInt(SelectedMonth, 10),
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
            parseInt(SelectedYear, 10),
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
});

exports.AllEvents = catchAsync(async (req, res) => {
  const allClub = await club.find();

  res.status(200).json({
    status: "Success",
    data: {
      ClubEvents: allClub,
    },
  });
});

exports.dayEvent = catchAsync(async (req, res) => {
  const SelectedMonth = req.params.month;
  const SelectedYear = req.params.year;
  const SelectedDay = req.params.day;
  const SelectedDate = `${SelectedDay}-${SelectedMonth}-${SelectedYear}`;

  const allClubEvents = await club.find();
  const allAcademicEvents = await academic.find();

  const clubEvents = allClubEvents.filter(
    (event) => event.date === SelectedDate
  );
  const academicEvents = allAcademicEvents.filter(
    (event) => event.date === SelectedDate
  );

  res.status(200).json({
    status: "Success",
    ClubEventLength: clubEvents.length,
    AcademicEventLength: academicEvents.length,
    data: {
      AcademicEvents: academicEvents,
      ClubEvents: clubEvents,
    },
  });
});

exports.createPersonelEvent = catchAsync(async (req, res, next) => {
  const newEvent = await personal.create(req.body);

  if (!newEvent) {
    return res.status(400).json({
      status: "Error",
      message: "Failed to create the event.",
    });
  }

  res.status(201).json({
    status: "Success",
    data: {
      event: newEvent,
    },
  });
});

exports.createClubEvent = catchAsync(async (req, res, next) => {
  const newEvent = await club.create(req.body);

  if (!newEvent) {
    return res.status(400).json({
      status: "Error",
      message: "Failed to create the event.",
    });
  }

  res.status(201).json({
    status: "Success",
    data: {
      event: newEvent,
    },
  });
});
