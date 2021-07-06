const express =require("express");
require("dotenv").config();
const dbConnect=require("./config/connectDB");
const app = express();

app.use(express.json())


//connect DB
dbConnect();

//create route
app.use("/api/contact/", require("./routes/contacts"));

const PORT = process.env.PORT;
app.listen(PORT, (err)=> 
err?console.error(err):console.error("server is running")
);

 