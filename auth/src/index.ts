import express from 'express';
import {json} from 'body-parser';
import { currentUserRoute } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middleware/errors-handdler';

const app= express();
app.use(json());
app.use(currentUserRoute);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);

app.listen(4000, ()=>{console.log("auth app is listening to port 4000 !!!")

});