const Lead = require('../models/Lead');

// GET all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().populate('telecaller', 'username email');
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create new lead
exports.createLead = async (req, res) => {
  const { name, email, phone, address, telecaller } = req.body;
  try {
    const lead = await Lead.create({
      name, email, phone, address, telecaller
    });
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update lead address
exports.updateLeadAddress = async (req, res) => {
  const { address } = req.body;
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });

    // Optional: Only allow if user is admin or the assigned telecaller
    if (req.user.role !== 'admin' && lead.telecaller.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    lead.address = address;
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a lead
exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH update call status
exports.updateLeadStatus = async (req, res) => {
  const { status, response } = req.body;
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });

    // Only assigned telecaller can update
    if (lead.telecaller.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    lead.callStatus = { status, response };
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
