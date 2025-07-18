const express = require("express");
const { routeUsage, stopUsage, peakTimes } = require("../controllers/analyticsController");
const { protect, authorize } = require("../middlewares/auth");

const router = express.Router();

// All analytics endpoints are admin-protected
router.use(protect, authorize("admin"));

router.get("/route-usage", routeUsage);
router.get("/stop-usage", stopUsage);
router.get("/peak-times", peakTimes);

module.exports = router; 