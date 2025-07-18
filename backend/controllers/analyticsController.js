const Booking = require("../models/Booking");
const Route = require("../models/Route");
const Stop = require("../models/Stop");

// Get booking counts per route
exports.routeUsage = async (req, res) => {
  try {
    const usage = await Booking.aggregate([
      { $group: { _id: "$routeId", count: { $sum: 1 } } },
      { $lookup: { from: "routes", localField: "_id", foreignField: "_id", as: "route" } },
      { $unwind: "$route" },
      { $project: { _id: 0, routeId: "$route._id", routeName: "$route.name", count: 1 } },
      { $sort: { count: -1 } }
    ]);
    res.json({ success: true, data: usage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get boarding/alighting counts per stop
exports.stopUsage = async (req, res) => {
  try {
    const boardings = await Booking.aggregate([
      { $group: { _id: "$fromStopId", count: { $sum: 1 } } },
      { $lookup: { from: "stops", localField: "_id", foreignField: "_id", as: "stop" } },
      { $unwind: "$stop" },
      { $project: { _id: 0, stopId: "$stop._id", stopName: "$stop.name", count: 1 } },
      { $sort: { count: -1 } }
    ]);
    const alightings = await Booking.aggregate([
      { $group: { _id: "$toStopId", count: { $sum: 1 } } },
      { $lookup: { from: "stops", localField: "_id", foreignField: "_id", as: "stop" } },
      { $unwind: "$stop" },
      { $project: { _id: 0, stopId: "$stop._id", stopName: "$stop.name", count: 1 } },
      { $sort: { count: -1 } }
    ]);
    res.json({ success: true, boardings, alightings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get bookings per hour (peak times)
exports.peakTimes = async (req, res) => {
  try {
    const peak = await Booking.aggregate([
      { $project: { hour: { $hour: "$departureTime" } } },
      { $group: { _id: "$hour", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    res.json({ success: true, data: peak });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}; 