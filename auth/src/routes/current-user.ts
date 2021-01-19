import express from 'express';

const router=express.Router();

router.get('/api/users/currentuser' ,(req,res)=>{
    res.send("Luc Panta vous ecoute")
});

export{router as currentUserRoute}