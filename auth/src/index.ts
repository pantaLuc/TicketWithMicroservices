import mongoose from 'mongoose';

import {app} from './app'

const start=async ()=>{
    if(!process.env.JWT_KEY){
        throw new Error('jwt must be defined')
    }
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

