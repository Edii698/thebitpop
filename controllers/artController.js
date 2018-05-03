const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Art
      .find(req.query)
      .sort({ date: -1 })
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  },
  findNew: function (req, res) {
    db.Art
      .find(req.query)
      .sort({ date: -1 })
      .limit(1)
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Art
      .findById(req.params.id)
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.Art
      .findById(req.params.UserId)
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    const art = {
      _UserId: req.body._id,
      fileName: req.body.fileName,
    };
    db.Art
      .create(art)
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Art
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Art
      .findById({ _id: req.params.id })
      .then(dbArt => dbArt.remove())
      .then(dbArt => res.json(dbArt))
      .catch(err => res.status(422).json(err));
  }
};
