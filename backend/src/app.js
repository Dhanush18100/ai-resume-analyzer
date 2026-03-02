const express=require('express')
const authRouter=require('./routes/authRoutes')
const cookiePareser=require('cookie-parser')
const cors=require('cors')
const interviewRouter=require('./routes/interviewRoutes')


const app=express()


app.use(express.json())
app.use(cookiePareser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/auth',authRouter)
app.use('/api/interview',interviewRouter)




module.exports=app;