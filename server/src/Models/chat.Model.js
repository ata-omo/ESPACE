// chat features
// 1- chat name
// 2- one to many or many to many or one to one
// 3- admin info(*)/group creator info
// 4- latest message

import mongoose,{Schema, mongo} from "mongoose";
import {Jwt} from "jsonwebtoken";
import bcrypt from "bcrypt";

const chatRoomSchema = new Schema({
  roomType: { type: String, enum: ['one-to-one', 'one-to-many', 'many-to-many'], required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  title: { type: String }, // For channels/groups
  latestMessage: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }
  // Add other fields as needed
}, {timestamps: true});

export const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

