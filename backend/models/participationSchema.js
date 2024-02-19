import mongoose from "mongoose"
const participationSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Types.ObjectId,
         ref:'User'
    },
    subject:{
        type: mongoose.Types.ObjectId,
         ref:'Subject'
    },
    marks:{
        type:String
    },
    date:{
        type: Date,
        default:Date.now,
    },
})
export const Participation = mongoose.model('Participation',participationSchema)
