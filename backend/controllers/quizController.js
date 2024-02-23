import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Quiz } from "../models/quizSchema.jsSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { request } from "express";

//post a quiz
export const postQuiz = catchAsyncErrors(async(req, res, next)=>{
    const {isAdmin} =req.user;
    if(isAdmin === false){
        return next(
            new ErrorHandler("Only Admin can post in this section")
        );
    }
    const {question, option1, option2, option3, option4, answer} =req.body;
    if(!question || !option1 || !option2 || !option3 || !option4 || !answer){
        return next(
            new ErrorHandler("Fill the details")
        )
    }
    const postedBy = req.user._id;
    const subjectId = req.subject._id;
    const quiz = await Quiz.create({
        question,
        option1,
        option2,
        option3,
        option4,
        answer
        })
        res.status(200).json({
            success: true,
            message:"Quiz posted successfully! ",
            subject,
        });
});

//update a quiz


//delete a quiz
export const deleteQuiz = catchAsyncErrors(async(req, res, next)=>{
    const {isAdmin} =req.user;
    if(isAdmin===false){
        return next(
            new ErrorHandler("Only Admin can delete ! ")
        )
    }
    const {id}=req.params;
    const quiz= await Quiz.findById(id);
    if(!quiz){
        return next(new ErrorHandler("No such item exists !!!",404))
    }
    await quiz.deleteOne();
    res.status(200).json({
        success:true,
        message:"Selected quiz item deleted from DB"
    })
})

//get a quiz

