const quizSchema = new mongoose.Schema({

    question:{
        type:String,
        required:[true,"Question cannot be filled as blank"],
    },
    option1:{
        type:String,
        required:[true,"Option cannot be filled as blank"],
    },
    option2:{
        type:String,
        required:[true,"Option cannot be filled as blank"],
    },
    option3:{
        type:String,
        required:[true,"Option cannot be filled as blank"],
    },
    option4:{
        type:String,
        required:[true,"Option cannot be filled as blank"],
    },
    answer:{
        type:String,
        required:[true,"Answer cannot be filled as blank"],
        validate: {
            validator: function(answer) {
              // Validate that the answer matches one of the options
              const options = [this.option1, this.option2, this.option3, this.option4];
              return options.includes(answer);
            },
            message: 'Answer must match one of the provided options'
          }
    },
    subjectId:{
        type: mongoose.Schema.ObjectId,
         ref:'Subject'
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
        type:Boolean,
        default:1,
    },
    author:{
        type: mongoose.Schema.ObjectId,
         ref:'User',
    },
})
export const Quiz = mongoose.model('Quiz',quizSchema)
