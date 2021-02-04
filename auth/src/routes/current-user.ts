import express from 'express';
import jwt from 'jsonwebtoken'
import { currentUser } from '../middleware/current-user';
import { requireAtuh } from '../middleware/notAuthuser';
const router=express.Router();

router.get('/api/users/currentuser' ,currentUser , requireAtuh,(req,res)=>{
   res.send(req.currentUser)
});

export{router as currentUserRoute}