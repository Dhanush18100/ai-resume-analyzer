const express=require('express')
const authRouter=require('./routes/authRoutes')
const cookiePareser=require('cookie-parser')


const app=express()


app.use(express.json())
app.use(cookiePareser())

app.use('/api/auth',authRouter)




module.exports=app;