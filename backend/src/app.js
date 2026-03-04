const express=require('express')
const authRouter=require('./routes/authRoutes')
const cookiePareser=require('cookie-parser')
const cors=require('cors')
const interviewRouter=require('./routes/interviewRoutes')


const app=express()
app.use(cors({
    origin: ["http://localhost:5173","https://ai-resume-analyzer-frontend-one.vercel.app"],
    credentials: true
}))


app.use(express.json())
app.use(cookiePareser())


app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.use('/api/auth',authRouter)
app.use('/api/interview',interviewRouter)




module.exports=app;