import mongoose from "mongoose"
const subjectSchema = new mongoose.Schema({
    subName:{
        type:String,
        required:[true,"Subject Name must be Provided"],
        maxLength:[20,"Subject Name must not be exceeded more than 20 characters"],
        minLength:[3,"Subject name must be atleast 3 characters"],
    },
    description:{
        type:String,
        required:[true,"Subject Description must be Provided"],
        minLength:[3,"Subject description must be atleast 3 characters"],
    },
    createdOn:{
        type: Date,
        default:Date.now,
    },
    updatedOn:{
        type: Date,
        default:Date.now,
    },
    activeIndicator:{
        type: Boolean,
        default:1,
    },
    postedBy:{
        type:mongoose.Types.ObjectId,
         ref:'User',
         required:true,
    },
})
export const Subject = mongoose.model('Subject',subjectSchema)
