import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { currentUserRoute } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middleware/errors-handdler';
import { NotFoundError } from './errors/notFound_Error';

const app= express();
app.set('trust proxy',true);
app.use(json());
app.use(
    cookieSession({
        signed:false,
        secure:true 
    })
)
app.use(currentUserRoute);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.all('*', async function (req, res) {
        throw new NotFoundError();
    })



const start=async ()=>{
    try{
       await mongoose.connect("mongodb://auth-mongo-serv:27017/auth",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    });
    console.log("connect to mongo db")
    }catch(err){
       console.error(err)
    };
    app.listen(4000, ()=>{console.log("auth app is listening to port 4000 !!!")

});
};

start();

app.use(errorHandler)
