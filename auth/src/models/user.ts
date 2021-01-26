import mongoose from 'mongoose'
//isnterfaces that describes the properties
//that are require to create a user 
interface Userattributs{
    email: string
    password: string
}
// interfaces that decribes the properties 
//that a user Models has

interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs:Userattributs):UserDoc;
}

//interfaces that describes properties that a single user has
interface UserDoc extends mongoose.Document{
    email:string,
    password:string
}
const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required :true
    }
})

userSchema.statics.build=(attrs:Userattributs)=>{
      return new User
}
const User=mongoose.model<UserDoc ,UserModel>('User',userSchema);



export{ User }