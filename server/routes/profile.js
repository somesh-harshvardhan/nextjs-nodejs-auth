const express = require('express');
const router = express.Router();

router.get("/validate/:id",(req,res)=>{
   const {id} = req.params;
   const db = req.app.get('db');
   const isValidUser = db.findOne("id",id);
   res.status(200).json({isValidUser : !!isValidUser})
})

module.exports=router;