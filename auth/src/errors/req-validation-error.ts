import {ValidationError} from 'express-validator' ;


export class RequestValidationError extends Error{
 

    constructor(public errors:ValidationError[]){
        super();
        //only because we are extending a built in class 
        Object.setPrototypeOf(this,RequestValidationError.prototype) 
    }
serializeErrors(){
    return this.errors.map(err=>{
        return {message:err.msg,field:err.param}
    })
}
}

