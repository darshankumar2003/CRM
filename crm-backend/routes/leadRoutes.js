const express = require('express');
const router = express.Router();
const {
  getLeads,
  createLead,
  updateLeadAddress,
  deleteLead,
  updateLeadStatus
} = require('../controllers/leadController');

const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

// All routes are protected
router.use(protect);

// GET all leads (Admin + Telecaller)
router.get('/', getLeads);

// POST new lead (Admin only)
router.post('/', authorizeRoles('admin'), createLead);

// PUT update lead address (Admin or Telecaller who owns the lead)
router.put('/:id', updateLeadAddress);

// DELETE a lead (Admin only)
router.delete('/:id', authorizeRoles('admin'), deleteLead);

// PATCH update call status (Telecaller only)
router.patch('/:id/status', authorizeRoles('telecaller'), updateLeadStatus);

module.exports = router;
