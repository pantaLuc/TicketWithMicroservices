import {Request ,Response ,NextFunction} from 'express';
import {validationResult} from 'express-validator';
import { RequestValidationError } from '../errors/req-validation-error';


export const validateRequest=(
    req:Request ,
    res:Response,
    next:NextFunction
    )=>{
     const error=validationResult(req);
     
     if(!error.isEmpty()){
         throw new RequestValidationError(error.array())
     }
   next();
} 