const Lead = require("../models/Lead");

const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1
    });

    res.json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Lead Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const searchLeads = async (req, res) => {
  try {
    const keyword = req.query.q;

    const leads = await Lead.find({
      $or: [
        {
          name: {
            $regex: keyword,
            $options: "i"
          }
        },
        {
          email: {
            $regex: keyword,
            $options: "i"
          }
        },
        {
          company: {
            $regex: keyword,
            $options: "i"
          }
        }
      ]
    });

    res.json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  searchLeads
};