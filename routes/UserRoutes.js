const express = require("express");
const router = express.Router();
const auth = require("../middleware/AuthMiddleware");
const { getUserProfile, updateUserProfile, approvePartner } = require("../controllers/userController");

router.get("/profile", auth, getUserProfile);
router.put("/profile", auth, updateUserProfile);
router.post("/approve-partner", auth, approvePartner);

module.exports = router;
