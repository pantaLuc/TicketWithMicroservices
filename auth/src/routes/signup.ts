import express, {Request ,Response} from 'express'
import {User} from '../models/user';
import {body,validationResult} from 'express-validator'
import {RequestValidationError} from '../errors/req-validation-error';
import 'express-async-errors'
import { BadRequesError } from '../errors/bad-reques';
import jwt from 'jsonwebtoken'; 

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
 async function (req: Request, res: Response) {
  
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new RequestValidationError(error.array());
    }
    const {email, password}=req.body 
  // verifier si un utilisateur exist avec cet email

  const existingUser=await User.findOne({email});
  if(existingUser){
   throw new BadRequesError('email in use');
  }
  //create a new user
  const user=User.build({email ,password})
  //save the user to the data base
  await user.save();
  //Generate JWT
  const userJwt=jwt.sign({
    id:user.id,
    email:user.email
  },'panta') 
  //Store it on session objet 
  req.session={
    jwt:userJwt
  };
  
  res.status(201).send(user);

  });

export{router as signupRouter}