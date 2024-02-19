import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import userRouter from './routes/userRouter.js'
import subjectRouter from './routes/subjectRouter.js'
import quizRouter from './routes/quizRouter.js'
import participationRouter from './routes/participationRouter.js'

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user',userRouter);
app.use('/api/v1/subject',subjectRouter);
app.use('/api/v1/quiz',quizRouter);
app.use('/api/v1/participation',participationRouter)





dbConnection();

app.use(errorMiddleware)

export default app;