import mongoose,{Schema, mongo} from "mongoose";

const messageSchema = new Schema({
    roomId: { type: Schema.Types.ObjectId, ref: 'ChatRoom', required: true },
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String },
    type: { type: String, enum: ['text', 'image', 'file'], default: 'text', trim: true },
},{timestamps: true});


export const Message = mongoose.model('Message',messageSchema);