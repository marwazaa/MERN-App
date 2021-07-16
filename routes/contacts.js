const express=require("express");
/*const mongoose=require("mongoose");*/
const router= express.Router();
const Contact = require('../models/contact')
const controllers= require ("../controllers/contact.controllers")


//get all contact
/*router.get("/",(req,res)=>
Contact.find().then((el)=>res.json(el))
.catch((err)=>console.log(err))
)*/

router.get("/", async(req,res)=> {
  try{
    const result = await Contact.find();
    res.send({response:result, message: "geting contacts successfully"});
  } catch (error){
    res.status(400).send({message:"can not get contacts"})
  }
});

//get one contact

router.get("/:id", async(req,res)=> {
  try{
    const result = await Contact.findOne({_id:req.params.id});
    res.send({response:result, message: "geting contacts successfully"});
  } catch (error){
    res.status(400).send({message:"there is no contact with this id"})
  }
});

//post

router.post("/", controllers.postContact);


//DELETE one contact

router.delete("/:id", async(req, res) => {
  try{ 
    const result=await Contact.deleteOne({_id:req.params.id});
    console.log(result)
    res.send("deleted");
    }
  catch(error){
  res.send("not deleted");
  } 
});


//put

router.put("/:id", async(req, res) => {
  try{ 
    const result= await Contact.updateOne(
      {_id: req.params.id},
      {$set: {...req.body}}
    );
    console.log(result);
    result.nModified
    ?res.send({message:"user update"})
    :res.send({message: "contact already updated"})
  }
  catch(error){
  res.status(400).send("not updated");
  }
});


module.exports=router; 
