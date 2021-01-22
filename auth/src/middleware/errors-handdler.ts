import {Request ,Response ,NextFunction} from 'express';
import {RequestValidationError} from '../errors/req-validation-error'
import {DatabaseConnectionError} from '../errors/databaseConnectionError';


export const errorHandler=(
    err:Error , 
    req:Request ,
    res:Response ,
    next:NextFunction)=>{
        if(err instanceof RequestValidationError){
            return res.status(400).send({errors:err.serializeErrors()})
        }
        if (err instanceof DatabaseConnectionError){
            return res.status(500).send({errors:err.serializeErrors()})
        }
         res.status(400).send({message:'something get wrong'})

}