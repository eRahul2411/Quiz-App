import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Subject } from "../models/subjectSchema.js";

import ErrorHandler from "../middlewares/error.js";


//To view or show all the subjects
export const getAllSubject = catchAsyncErrors(async(req, res, next) =>{
    const subject = await Subject.find({activeIndiactor:true});
    res.status(200).json({
        success:true,
        subject,
    })
})

//post subject
export const postSubject = catchAsyncErrors(async(req, res, next) => {
    const { isAdmin } = req.user;
    if(isAdmin ===false){
        return next(
            new ErrorHandler("User cannot add a subject by themselves",400)
        );
    }

    const{subName,description} = req.body;
    if(!subName||!description){
        return next(new ErrorHandler("Please fill the all the details"));
    }
    const postedBy = req.user._id;
    const subject = await Subject.create({
    subName,
    description,
    })
    res.status(200).json({
        success: true,
        message:"Subject posted successfully! ",
        subject,
    });
});

//delete a subject
export const deleteSubject = catchAsyncErrors(async (req, res, next)=>{
    const { isAdmin } = req.user;
    if(isAdmin ===false){
        return next(
            new ErrorHandler("User cannot delete a subject by themselves",400)
        );
    }
    const {id} = req.params;
    const subject = await Subject.findById(id);
    if(!subject) {
        return next(new ErrorHandler("OOPS!..Subject not Found", 404));
    }
    await subject.deleteOne();
    res.status(200).json({
        success: true,
        message:"Subject Deleted! ",
    });
});



//to get the subject
export const getMySubject = catchAsyncErrors(async(req, res, next) => {
    const { isAdmin } = req.user;
    if(isAdmin ===true){
        return next(
            new ErrorHandler("Admin cannot participate a subject by themselves",400)
        );
    }
    const mySubject = await Job.find({ postedBy: req.user._id });
   res.status(200).json({
    success: true,
    mySubject,
  });

});