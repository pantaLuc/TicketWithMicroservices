import {CustomError} from '../errors/custom-err';

export class NotFoundError  extends CustomError{
    statusCode=400;

    constructor(){
        super('route not found');
        Object.setPrototypeOf(this,NotFoundError.prototype)

    }

    serializeErrors(){
        return [{
            message:"Not found"
        }]
    }

}