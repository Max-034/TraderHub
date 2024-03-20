import express from "express";
const app = express();
const port = 8000;

// routes/oauth.mjs
import authRouter from './routes/oauth.js';


// routes/request.mjs
import requestRouter from './routes/request.js';




app.use('/auth/google/redirect' , authRouter);
app.use('/request' , requestRouter);





app.listen(8000);