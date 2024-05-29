import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./database/connectDB.js"
import router from "./routes/index.js"
import cookieParser from "cookie-parser"

const app = express()

dotenv.config()

app.use(express.json())

app.use(cookieParser())

//防止跨站請求
app.use(
  cors({
    origin: process.env.BACKEND_URL,
    credentials: true,
  })
)

const PORT = process.env.PORT || 8080

app.get("/", (req, res, next) => {
  res.json({ message: `server running at ${PORT}` })
})

app.use("/api", router)

app.listen(PORT, () => {
  connectDB()
  console.log(`Server running on port ${PORT}`)
})
