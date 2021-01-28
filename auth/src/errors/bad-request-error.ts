//here we will be focusing on handling errror when ause try to log with someone cretential
import {ValidationError} from 'express-validator'
import { CustomError } from './custom-err';

export class BadRequesError extends CustomError{
    statusCode=400;
    constructor(public message:string){
        super(message)
       Object.setPrototypeOf(this,BadRequesError.prototype)
    }
    serializeErrors(){
        return[]
    }
}