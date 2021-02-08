import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose'
import {app} from '../app';
// est un hook qui va s' executer avant tout nos tests
let mongo:any
beforeAll(async ()=>{
    process.env.JWT_KEY='panta'
    mongo= new  MongoMemoryServer() ;//create a mmongomemory server
    const mongoUri=await mongo.getUri();

    await mongoose.connect(mongoUri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
    });
});
//un hook qui va s' executer avant chaque test individuel
beforeEach(async ()=>{
    const collections=await mongoose.connection.db.collections();

    for(let collection of collections){
        await collection.deleteMany({})
    }
});

// un hook qui va s' executer apres que tout nos test ce soit fait 

afterAll(async ()=>{
   await mongo.stop();
   await mongoose.connection.close()
})