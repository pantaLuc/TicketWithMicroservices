import {Request ,Response ,NextFunction} from 'express';
import {CustomError} from '../errors/custom-err';

export const errorHandler=(
    err:Error , 
    req:Request ,
    res:Response ,
    next:NextFunction)=>{
        if (err instanceof CustomError){
            res.status(err.statusCode).send({errors:err.serializeErrors()})
        }
         res.status(400).send({message:'something get wrong'})

}