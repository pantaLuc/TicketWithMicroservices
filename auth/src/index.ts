import express from 'express';
import {json} from 'body-parser';
import { currentUserRoute } from './routes/current-user';

const app= express();
app.use(json());
app.use(currentUserRoute);

app.listen(4000, ()=>{console.log("auth app is listening to port 4000 !!!")

});