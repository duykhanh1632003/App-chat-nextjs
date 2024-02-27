const { default: mongoose } = require("mongoose");

const chatSchema = new mongoose.Schema({
  members: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    default: [],
  },
  members: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
    default: [],
  },
  isGroup: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  groundPhoto: {
    type: String,
    default: "",
  },
  groundPhoto: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  lastMessageAt: {
    type: Date,
    default: Date.now,
  },
});
const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
