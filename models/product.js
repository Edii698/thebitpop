const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

  // _ArtId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Art"
  // },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the noteText
  item: { 
    type: String, 
    required: true
  }, 

  fileName: {
    type: String,
  },

  itemType: {
    type: String
  },

  size: {
    type: String,
  },

  qty: {
    type: String,
  }
  });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
