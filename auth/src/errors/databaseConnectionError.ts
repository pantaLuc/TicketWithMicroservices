import {ValidationError} from 'express-validator';
import {CustomError} from '../errors/custom-err';
export class DatabaseConnectionError extends CustomError{
    statusCode= 500;
    reason ='error connecting to database';
    constructor(){
        super();
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
    }
   serializeErrors(){
       return[
           {message:this.reason}
       ]
   }
}