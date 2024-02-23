import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  const { userName, name, email, password,  } = req.body;
  if (!name || !email || !userName || !password ) {
    return next(new ErrorHandler("Please fill full form!"));
  }
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!"));
  }
  const isuserName = await User.findOne({ userName });
  if (isuserName) {
    return next(new ErrorHandler("username already registered!"));
  }
  const user = await User.create({
    userName,
    name,
    email,
    password,
  });
  sendToken(user, 201, res, "User Registered!");
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password ) {
    return next(new ErrorHandler("Please provide Username ,password"));
  }
  const user = await User.findOne({ userName }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Username Or Password.", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Username Or Password.", 400));
  }
  
  sendToken(user, 201, res, "User Logged In!");
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully.",
    });
});


export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});