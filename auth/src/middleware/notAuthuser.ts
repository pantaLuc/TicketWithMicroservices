import {Request , Response ,NextFunction} from 'express'
import { NotAuthorizedErrors } from '../errors/not-Auth-user'

export const requireAtuh=(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    if(!req.currentUser){
        throw new NotAuthorizedErrors();
    }
    next()
}