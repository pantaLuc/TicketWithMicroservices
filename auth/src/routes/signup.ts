import express, {Request ,Response} from 'express'
import {body,validationResult} from 'express-validator'

const router=express.Router()

router.post('/api/users/signup',[
  body('email')
  .isEmail()
  .withMessage("Email must be valid"),
  body("password")
  .trim()
  .isLength({min:4 , max:20})
  .withMessage("password must be between 4 and 20characters")
],
(req:Request,res:Response)=>{
  const {email ,password}=req.body
  const error=validationResult(req);
  if(!error.isEmpty()){
    throw new Error('invalid email or password');
  }
  console.log("creating a User .....");
  throw new Error('Error connecting to database');
  res.send({});
  

});

export{router as signupRouter}