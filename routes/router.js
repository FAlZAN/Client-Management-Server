const express = require("express");
const router = express.Router();
const disposedDataModelCopy = require("../models/disposedDataModel");
const followUpDataModelCopy = require("../models/followUpDataModel");

router.post("/disposed", (request, response) => {
  const disposedData = new disposedDataModelCopy({
    opportunityId: request.body.opportunityId,
    executiveName: request.body.executiveName,
    teamLeader: request.body.teamLeader,
    customerName: request.body.customerName,
    leadStage: request.body.leadStage,
    leadSource: request.body.leadSource,
    calledDate: request.body.calledDate,
    disposedDate: request.body.disposedDate,
  });
  disposedData
    .save()
    .then((data) => {
      response.json("Disposition Added to Database Successfully.");
    })
    .catch((error) => response.json(error));
});

router.post("/followup", (request, response) => {
  const followUpData = new followUpDataModelCopy({
    opportunityId: request.body.opportunityId,
    executiveName: request.body.executiveName,
    teamLeader: request.body.teamLeader,
    customerName: request.body.customerName,
    leadStage: request.body.leadStage,
    leadSource: request.body.leadSource,
    calledDate: request.body.calledDate,
    followUpRemark: request.body.followUpRemark,
    followUpDate: request.body.followUpDate,
    followUpTime: request.body.followUpTime,
  });
  followUpData
    .save()
    .then((data) => {
      response.json("Follow Up Added to Database Successfully.");
    })
    .catch((error) => response.json(error));
});

router.get("/alldisposed", (request, response) => {
  disposedDataModelCopy
    .find()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/allfollowup", (request, response) => {
  followUpDataModelCopy
    .find()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.delete("/adocument", (request, response) => {
  followUpDataModelCopy
    .deleteOne({_id: request.body.id})
    .then((response) => response.send("Removed from Database Successully."))
    .catch((error) => response.send(error));
});

module.exports = router;
