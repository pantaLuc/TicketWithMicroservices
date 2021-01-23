import express, {Request ,Response} from 'express'
import {body,validationResult} from 'express-validator'
import {RequestValidationError} from '../errors/req-validation-error';
import {DatabaseConnectionError} from '../errors/databaseConnectionError'
import 'express-async-errors'

const router=express.Router()

router.post('/api/users/signup',[
  body('email')
  .isEmail()
  .withMessage("Email must be valid"),
  body("password")
  .trim()
  .isLength({min:4 , max:20})
  .withMessage("password must be between 4 and 20characters")
],
 async function (req: Request, res: Response) {
    const { email, password } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new RequestValidationError(error.array());
    }
    console.log("creating a User .....");
    throw new DatabaseConnectionError();
    res.status(200).send("luc perin panta");


  });

export{router as signupRouter}