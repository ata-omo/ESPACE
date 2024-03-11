import mongoose,{Schema,mongo} from "mongoose";

const userModel = new Schema({
    name:{type: String,required:true},
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String},
    oauthId: {type:String},
    admin:{type:Boolean,default:false},
    profilePic:{type:String},
    premium:{type:Boolean,default:true},
    blockedUser:[{type:Schema.Types.ObjectId,ref:'User'}],
},{timestamps:true});

const User = mongoose.model("User", userModel);