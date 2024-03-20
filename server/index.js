import express from "express";
const app = express();
const port = 8000;
import dotenv from "dotenv";
dotenv.config();


import authRouter from './routes/oauth.js';


import requestRouter from './routes/request.js';




app.use('/auth/google/redirect' , authRouter);
app.use('/request' , requestRouter);







app.listen(port, '0.0.0.0', err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
