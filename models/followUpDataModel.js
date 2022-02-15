const mongoose = require("mongoose");

const followUpDataTemplate = new mongoose.Schema({
  opportunityId: {
    type: Number,
    required: true,
  },
  executiveName: {
    type: String,
    required: true,
  },
  teamLeader: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  leadStage: {
    type: String,
    required: true,
  },
  leadSource: {
    type: String,
    required: true,
  },
  calledDate: {
    type: String,
    required: true,
  },
  followUpRemark: {
    type: String,
    required: true,
  },
  followUpDate: {
    type: String,
    required: true,
  },
  followUpTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("followUpTable", followUpDataTemplate);
