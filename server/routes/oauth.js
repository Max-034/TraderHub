import express from "express";
var router = express.Router();
import {OAuth2Client} from "google-auth-library";

async function getUserData(access_token){
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}');
    const data = await response.json();
    console.log('data' , data);
}

router.get('/' , async function(req,res,next){
    const code = req.query.code;
    try{
        const redirectUrl = 'http://localhost:8000/auth/google/redirect';
        const oAuth2Client = new OAuth2Client(
            '270355355302-lvkv43psvih9pp5mqg70fi2butmj5d81.apps.googleusercontent.com',
        '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',
        redirectUrl ,

        );
        const rres = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(rres.tokens);
        console.log('token acquired');
        // const user = oAuth2Client.credentials;
        // await getUserData(user.access_token);
        res.redirect("http://localhost:3000/dashboard");
        
        
    }catch(err){
        console.log('error with signing in with google');
    }

    

})

export default router;