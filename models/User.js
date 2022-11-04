const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  slackUsername: {
    type: String,
    required: true,
  },
  operationType: {
    type: String,
    required: true,
    enum: ["addition", "subtraction", "multiplication"],
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
