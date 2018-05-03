const db = require("../models");

// Defining methods for the producticleController
module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ date: -1 })
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  findNew: function (req, res) {
    db.Product
      .find(req.query)
      .sort({ date: -1 })
      .limit(1)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    const product = {
      // _Artid: req.body._id,
      item: req.body.item,
      fileName: req.body.fileName,
      size: req.body.size,
      qty: req.body.qty,
      itemType: req.body.itemType
    };
    db.Product
      .create(product)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbProduct => dbProduct.remove())
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  }
};
