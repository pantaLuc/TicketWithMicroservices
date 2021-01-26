import express, {Request ,Response} from 'express'
import {User} from '../models/user';
import {body,validationResult} from 'express-validator'
import {RequestValidationError} from '../errors/req-validation-error';
import 'express-async-errors'

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
  // verifier si un utilisateur exist avec cet email
  const {email , password}=req.body
  const existingUser=await User.findOne({email});
  if(existingUser){
    console.log("email in use");
    return  res.send({})
  }
  //create a new user
  const user=User.build({email ,password})
  //save the user to the data base
  await user.save()
  // saying a user is created

  res.status(201).send({user})

  });

export{router as signupRouter}