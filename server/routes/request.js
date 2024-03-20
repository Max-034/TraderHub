import express from "express";
var router = express.Router();
import {OAuth2Client} from "google-auth-library";


router.post('/' , async function(req,res,next){
    res.header('Access-Control-Allow-Origin' , 'http://localhost:3000');
    res.header('Referrer-Policy' , 'no-referrer-when-downgrade');

    const redirectUrl = 'http://localhost:8000/auth/google/redirect';
    const oAuth2Client = new OAuth2Client(
        '270355355302-lvkv43psvih9pp5mqg70fi2butmj5d81.apps.googleusercontent.com',
        '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',
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