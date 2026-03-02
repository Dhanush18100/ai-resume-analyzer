
const app = require('./src/app')
const dotenv=require('dotenv')
const connectDB = require('./src/config/db')
dotenv.config()

// const {resume, selfDescription,jobDescription}=require('./src/s')

//test -> to see whether the ai is working or not

// const invokeGeminiAi=require('./src/services/aiService')

// invokeGeminiAi()

connectDB()
const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})