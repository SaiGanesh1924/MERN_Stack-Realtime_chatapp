import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import connectMongodb from './db/connecttoMongodb.js';
import messageRoutes  from  './routes/message.routes.js';
import usereRoutes from './routes/user.routes.js';

 const  app =   express();

 app.use(express.json());

 dotenv.config();

const PORT = process.env.PORT || 5000

app.use(cookieParser());  //for accessing cookies

app.use("/api/auth",authRoutes); //middleware for routes

app.use("/api/messages",messageRoutes);
app.use("/api/users",usereRoutes);

app.get("/",(req,res)=>{
res.send("basic response");
})

 app.listen(PORT,()=>{
    connectMongodb();
    console.log(`listening at ${PORT}`)
 })
