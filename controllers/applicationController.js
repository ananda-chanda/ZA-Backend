const Application = require("../models/Application");

exports.apply = async (req, res) => {
  const { companyId } = req.body;
  const partnerId = req.user._id;

  try {
    const application = new Application({ partnerId, companyId });
    await application.save();
    res.status(201).json({ message: "Application submitted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
