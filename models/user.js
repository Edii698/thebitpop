const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  firstName: {
    type: String,
    require: true
  },

  lastName: {
    type: String,
    require: true
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },

  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },

  admin: Boolean
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
