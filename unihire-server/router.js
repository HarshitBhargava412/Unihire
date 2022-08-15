const express = require("express");
const segmentsController = require("./segmentsController");

const router = express.Router();

router.get("/segments", segmentsController.getAllsegments);

module.exports = router;
