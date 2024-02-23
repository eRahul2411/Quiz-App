import express from "express";
import {isAuthenticated} from "../middlewares/auth.js";
import {
    getAllSubject,
    deleteSubject,
    getMySubject,
    postSubject,

} from "../controllers/subjectController.js"

const router = express.Router()

router.get("/getall",getAllSubject);
router.post("/post",isAuthenticated,postSubject);
router.delete("/delete/:id",isAuthenticated,deleteSubject);
router.get("/getmysubject",isAuthenticated,getMySubject);

export default router;