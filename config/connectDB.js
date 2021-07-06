const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
    let result= await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    console.log("database connect");
    } catch(error){
        console.log(`can not connect to database ${error}`);
    }
};
module.exports=connectDB
