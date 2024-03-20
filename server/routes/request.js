import express from "express";
var router = express.Router();
import {OAuth2Client} from "google-auth-library";
import dotenv from "dotenv";
dotenv.config();


router.post('/' , async function(req,res,next){
    res.header('Access-Control-Allow-Origin' , 'http://localhost:3000');
    res.header('Referrer-Policy' , 'no-referrer-when-downgrade');

    const redirectUrl = 'http://localhost:8000/auth/google/redirect';
    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl ,

    );

    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline", 
        scope: 'profile openid' , 
        prompt: 'consent'
    });

    res.json({url:authorizeUrl})

})

export default router;