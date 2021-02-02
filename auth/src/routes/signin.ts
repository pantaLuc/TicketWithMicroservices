import express ,{Request ,Response} from 'express'
import {body, validationResult} from 'express-validator';
import { RequestValidationError } from '../errors/req-validation-error';
import { validateRequest } from '../middleware/valid-request';
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
(req:Request ,res:Response)=>{
  
    
});

export{ router as signinRouter}