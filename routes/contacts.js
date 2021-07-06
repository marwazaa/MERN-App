const express=require("express");
/*const mongoose=require("mongoose");*/
const router= express.Router();
const Contact = require('../models/contact')


//get
router.get('/',(req,res)=>
Contact.find().then((el)=>res.json(el))
.catch((err)=>console.log(err))
)


//post

router.post("/", async(req, res) => {
    try{ 
         let newContact = new Contact({...req.body});
    let result=await newContact.save()
    res.send({result:result, msg:"contact added"})
      }
    catch(error){
    res.send(error)
    }
});


//DELETE

router.delete("/:id", async(req, res) => {
  try{ 
    const result=await Contact.deleteOne({_id:req.params.id});
 
    res.send({result:result,msg:"contact deleted"});
    }
  catch(error){
  res.send(Error);
  } 
});


//update

router.put("/:id", async(req, res) => {
  try{ 
    const result= await Contact.updateOne(
      {_id: req.params.id},
      {$set: {...req.body}}
    );
    console.log(result);
    res.send("updated");
    }
  catch(error){
  res.send("not updated");
  }
});


module.exports=router; 
