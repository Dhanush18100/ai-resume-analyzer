const express=require('express')
const authMiddleware=require('../middlewares/authMiddlewar')
const interviewController=require('../controllers/interviewController')
const upload=require('../middlewares/fileMiddleware')
const interviewRouter=express.Router()

/**
 * @route POST /api/interview/
 * @description generate new interview report on the basis of user self description,resume pdf and job description.
 * @access private
*/

interviewRouter.post('/',authMiddleware.authUser,upload.single("resume"),interviewController.generateInterviewReportController)

module.exports=interviewRouter