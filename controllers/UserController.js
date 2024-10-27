const User = require("../models/User");
const Application = require("../models/Application");

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve partner application (Company Role Required)
exports.approvePartner = async (req, res) => {
  const { partnerId } = req.body;

  try {
    const application = await Application.findOne({ partnerId, companyId: req.user._id });
    if (!application) return res.status(404).json({ message: "Application not found" });

    application.status = "approved";
    await application.save();

    const partner = await User.findById(partnerId);
    if (partner) {
      partner.isApproved = true;
      await partner.save();
    }

    res.json({ message: "Partner approved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
