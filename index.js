import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import fileUload from 'express-fileupload';
import cors from 'cors';
import path from 'path'
import todo_routes from './routes/todo_routes.js'

dotenv.config()
const PORT = 8080 || process.env.PORT
const app = express()

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}))

app.use(express.json())
app.use(express.static(path.resolve(process.cwd(), 'static')))
app.use(fileUload({}))
app.use('/v1', todo_routes)
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser());

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {})
    app.listen(PORT, () => console.log(`we are listen ${PORT}`))
  } catch (error) {
    console.log(error)
  }

}
start()