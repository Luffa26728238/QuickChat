import mongoose from "mongoose"

const { Schema, model } = mongoose
const { ObjectId } = Schema
const messageSchema = new Schema(
  {
    text: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    videoUrl: {
      type: String,
      default: "",
    },
    isSeen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const conversationSchema = new Schema(
  {
    sender: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    messages: {
      type: ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
)

const Messages = model("Messages", messageSchema)

const Conversations = model("Conversations", conversationSchema)

export default { Messages, Conversations }
