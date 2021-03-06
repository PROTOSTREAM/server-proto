const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ideaSchema = mongoose.Schema({
  phonestatus: { type: String, required: false, default: "not-verify" },
  TrlTest: { type: Number, default: 0 },
  Student: { type: ObjectId, ref: "User" },
  status: { type: String, default: "new-idea-created" },
  department: { default: undefined, type: String },
  Step2: { type: ObjectId, default: undefined, ref: "Step2" },
  Step3: { type: ObjectId, default: undefined, ref: "Step3" },
  Startup_Readiness: { type: ObjectId, ref: "Mentors" },
  Session: {type: Array},
  Milestone:{type: Array}
});

module.exports = mongoose.model("Idea", ideaSchema);
