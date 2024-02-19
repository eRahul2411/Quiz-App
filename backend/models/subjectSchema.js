import mongoose from "mongoose"
const subjectSchema = new mongoose.Schema({
    subName:{
        type:String,
        required:true,
    },
    createdOn:{
        type: Date,
        default:Date.now,
    },
    updatedOn:{
        type: Date,
        default:Date.now,
    },
    activeIndiactor:{
        type: Boolean,
        default:1
    },
    userid:{
        type:mongoose.Types.ObjectId,
         ref:'User'
    },
})
export const Subject = mongoose.model('Subject',subjectSchema)
