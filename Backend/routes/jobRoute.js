import express from "express";
import {isAuthorized} from "../middleware/auth.middleware.js"
import {deleteJob, getAllJobs, getMyJobs, getSingleJob, postJob, updateJob} from "../Controllers/jobController.js"


const router = express.Router();

router.get("/get-All-Jobs",isAuthorized, getAllJobs)
router.post("/post-job", isAuthorized, postJob)
router.get("/get-my-jobs", isAuthorized, getMyJobs)
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, deleteJob)
router.get("/:id", isAuthorized, getSingleJob)

export default router