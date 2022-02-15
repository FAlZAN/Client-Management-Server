const mongoose = require("mongoose");

const disposedDataTemplate = new mongoose.Schema({
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
  disposedDate: {
    type: String,
  },
});

module.exports = mongoose.model("disposedTable", disposedDataTemplate);
