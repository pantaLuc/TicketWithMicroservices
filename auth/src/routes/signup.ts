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
    res.status(400).send(error.array());
  }
  console.log("creating a User .....")
  res.send({})
  

});

export{router as signupRouter}