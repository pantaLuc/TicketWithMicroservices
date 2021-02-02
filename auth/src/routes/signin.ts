import express ,{Request ,Response} from 'express'
import {body} from 'express-validator';
import jwt from 'jsonwebtoken';
import { BadRequesError } from '../errors/bad-reques';
import { validateRequest } from '../middleware/valid-request';
import { User } from '../models/user';
import { Password } from '../utilities/pass-hashing';
const router =express.Router();

router.post('/api/users/signin',[
   body('email')
   .isEmail()
   .withMessage("Email must be valid"),
   body('password')
   .trim()
   .isLength({min:4 , max:20})
   .withMessage("password must be between 4 and 20 characters")
],
validateRequest,
async (req:Request ,res:Response)=>{
   const {email , password}=req.body
   const existingUser=await User.findOne({email})
   if(!existingUser){
     throw new BadRequesError("invalid credential")
   }

   const passMatch= await Password.compareHash(
     existingUser.password ,
     password);
  if(!passMatch){
    throw new BadRequesError('invalid Password');
  }
  // generate JWT
  const userJwt=jwt.sign(
    {
      id:existingUser.id,
      email:existingUser.email

    },
    process.env.JWT_KEY ! /// pour dire ne te soucis pas du type j ' ai gerer dans index.js
    
  )
  //store it on session 
  req.session={
    jwt:userJwt
  }
  res.status(200).send(existingUser)
});

export{ router as signinRouter}