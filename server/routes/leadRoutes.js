const express = require("express");

const router = express.Router();
const authMiddleware =
require("../middleware/authMiddleware");
const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  searchLeads
} = require("../controllers/leadController");

router.post(
  "/",
  authMiddleware,
  createLead
);

router.get(
  "/",
  authMiddleware,
  getLeads
);

router.put(
  "/:id",
  authMiddleware,
  updateLead
);

router.delete(
  "/:id",
  authMiddleware,
  deleteLead
);

router.get(
  "/search",
  authMiddleware,
  searchLeads
);

module.exports = router;