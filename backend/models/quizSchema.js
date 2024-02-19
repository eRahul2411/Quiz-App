const quizSchema = new mongoose.Schema({

    qstn:{type:String},
    op1:{type:String},
    op2:{type:String},
    op3:{type:String},
    op4:{type:String},
    ans:{type:String},
    subjectId:{type: mongoose.Types.ObjectId, ref:'Subject'},
    createdOn:{type:String},
    updatedOn:{type:String},
    activeIndicator:{type:String},
    author:{type: mongoose.Types.ObjectId, ref:'User'},
})
export const Quiz = mongoose.model('Quiz',quizSchema)
