const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { apply } = require("../controllers/applicationController");

router.post("/apply", auth, apply);

module.exports = router;
