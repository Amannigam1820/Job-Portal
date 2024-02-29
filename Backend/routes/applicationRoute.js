import express from "express";
import {isAuthorized} from "../middleware/auth.middleware.js"
import {jobSeekerDeleteapplication, jobSeekerGotAllApplication, employerGotAllApplication, postApplication} from "../Controllers/applicationController.js"


const router = express.Router();

router.get("/employer/getall", isAuthorized, employerGotAllApplication);
router.get("/jobseeker/getall", isAuthorized, jobSeekerGotAllApplication);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteapplication);
router.post("/post-application", isAuthorized, postApplication);

export default router