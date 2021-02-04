import { CustomError } from "./custom-err";

export class NotAuthorizedErrors extends CustomError{
   statusCode=401;
   constructor(){
       super("not authorized");
       Object.setPrototypeOf(this ,NotAuthorizedErrors.prototype)
   }

  serializeErrors(){
      return [{
         message:"Not authorized"
      }]
  }

}