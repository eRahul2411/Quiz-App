import mongoose from "mongoose"
const subjectSchema = new mongoose.Schema({
    subName:{type:String},
    createdOn:{type:String},
    updatedOn:{type:String},
    activeIndiactor:{type:String},
    userid:{type:mongoose.Types.ObjectId, ref:'User'}
})
export const Subject = mongoose.model('Subject',subjectSchema)
