const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({

  _UserId: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: "User"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the noteText
  fileName: { 
    type: String, 
    required: true
  } 
  });

const Art = mongoose.model("Art", artSchema);

module.exports = Art;
