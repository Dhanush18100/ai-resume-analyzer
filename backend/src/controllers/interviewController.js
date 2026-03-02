const pdfParse=require("pdf-parse")

const generateInterviewReport=require('../services/aiService')
const interviewReportModel = require("../models/interviewReportModel")

const generateInterviewReportController=async (req,res) => {
    try {
        

        const resumeContent=await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()

        const {selfDescription,jobDescription}=req.body

        const interviewResponseByAi=await generateInterviewReport({
            resume:resumeContent.text,
            selfDescription,
            jobDescription
        })


        const interviewReport=await interviewReportModel.create({
            user:req.user.id,
            resume:resumeContent.text,
            selfDescription,
            jobDescription,
            ...interviewResponseByAi //technical qn
        })

        res.status(201).json({
            message:"Interview report generated successfully",
            interviewReport
        })




    } catch (error) {
        console.log(error.message)
    }
}



module.exports={generateInterviewReportController}
