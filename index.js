const express= require("express");
const app =express();
const userRouter = require("./routes/user.js");
const  mongoose  = require("mongoose");
const User = require("./model/user");



const path= require("path");
const { HandleConnection } = require("./connection.js");
const { sendReminder } = require("./reminder.js");


app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


HandleConnection("mongodb://localhost:27017/library")
.then(()=>console.log("connected to Server"))
.catch((err) => console.log(err));


app.use("/",userRouter);

app.get("/",async (req,res)=>{

   const res1 = await User.find({});
   const arr = [];

 for(let i=0; i< res1.length;i++){
    
      const  issuedate = res1[i]?.issue.toISOString().slice(0, 10);
      const  returndate = res1[i]?.return.toISOString().slice(0, 10);
       
  arr.push({usn:res1[i]?.usn,isdate:issuedate,rdate:returndate});

  sendReminder(res1[i]?.usn,returndate);
 
setInterval(() => {
  sendReminder(returndate);
  console.log("checking for every 30sec");
},30000); // Runs every 30sec


   }
  // console.log(arr)
 
   return res.render("home");
});

  

app.listen(9000,(()=>{
    console.log("server connected");
}))






