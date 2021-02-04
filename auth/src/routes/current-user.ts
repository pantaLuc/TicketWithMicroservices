import express from 'express';
import jwt from 'jsonwebtoken'
import { currentUser } from '../middleware/current-user';
const router=express.Router();

router.get('/api/users/currentuser' ,currentUser ,(req,res)=>{
   res.send(req.currentUser)
});

export{router as currentUserRoute}