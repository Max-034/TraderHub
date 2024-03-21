import express from "express";
var router = express.Router();
import {OAuth2Client} from "google-auth-library";
import dotenv from "dotenv";
dotenv.config();

async function getUserData(access_token){
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}');
    const data = await response.json();
    console.log('data' , data);
}

router.get('/' , async function(req,res,next){
    const code = req.query.code;
    try{
        const redirectUrl = 'https://traderhub-1.onrender.com/auth/google/redirect';
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl ,

        );
        const rres = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(rres.tokens);
        console.log('token acquired');
        // const user = oAuth2Client.credentials;
        // await getUserData(user.access_token);
        res.redirect("https://trader-hub-mn95-c9ufdnpdo-max-034s-projects.vercel.app/dashboard");
        
        
    }catch(err){
        console.log('error with signing in with google');
    }

    

})

export default router;
