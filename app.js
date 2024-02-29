import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRoute.js"
import applicationRouter from "./routes/applicationRoute.js"
import jobRouter from "./routes/jobRoute.js"
import {errorMiddleware} from "./middleware/error.middleware.js"


const app = express();
dotenv.config({path:'./config/config.env'})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/temp/"
}));


app.use('/api/v1/user', userRouter)
app.use('/api/v1/application', applicationRouter)
app.use('/api/v1/job', jobRouter)

app.use(errorMiddleware)

export default app