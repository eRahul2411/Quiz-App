import mongoose from "mongoose"
const participationSchema = new mongoose.Schema({

    userId:{type: mongoose.Types.ObjectId, ref:'User'},
    subject:{type: mongoose.Types.ObjectId, ref:'Subject'},
    marks:{type:String},
    dateTime:{type:String},
})
export const Participation = mongoose.model('Participation',participationSchema)
