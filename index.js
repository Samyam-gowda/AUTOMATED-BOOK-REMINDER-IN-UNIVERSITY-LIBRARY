const express= require("express");
const app =express();

const  mongoose  = require("mongoose");
const  Form = require("./model/user");
const path= require("path");
app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));




app.post("/",async (req,res)=>{
    
  const {uname, usn, title, issue, ret} = req.body;
   const result = await Form.create({
    uname:uname,
    usn:usn,
    title:title,
    issue:issue,    
    return:ret,
   })
 console.log(result);
    res.render("home")
})

app.get("/",(req,res)=>{
    res.render("home");
})


app.listen(9000,(()=>{
    console.log("server connected");
}))




mongoose.connect('mongodb://127.0.0.1:27017/library')
.then(() => {
    
        console.log("Mongo Server connected");
    })
.catch(err => console.error('MongoDB connection error:', err));



// const {sendEmail} = require("./email");

// app.post("/", async (req, res) => {
//   try {

//     // Construct email ID using usn
//     const emailId = `${usn}@msruas.ac.in`;

//     // Send email
//     await sendEmail(
//       emailId,
//       "Library Form Submission",
//       `Hello ${uname},\n\nYour form submission was successful. Here are the details:\n\nTitle: ${title}\nIssue Date: ${issue}\nReturn Date: ${ret}\n\nThank you!`
//     );

//     res.render("home");
//   } catch (error) {
//     console.error("Error in POST route:", error);
//     res.status(500).render("home", { error: "Failed to submit the form." });
//   }
// });




