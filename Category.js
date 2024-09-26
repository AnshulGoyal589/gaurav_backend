const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ["Research Grants", "Patents and Journals", "Conferences", "Design Patents"]
  },
  projectTitle: {
    type: String,
    required: true
  },
  fundingAgency: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  pptLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);