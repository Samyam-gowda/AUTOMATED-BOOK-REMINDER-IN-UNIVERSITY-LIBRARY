const User = require("../model/user");

async function handleusercreate(req,res){
        const {uname, usn, title, issue, ret} = req.body;
         const result = await User.create({
             uname:uname,
             usn:usn,
             title:title,
             issue:issue,    
             return:ret,
         })
       console.log(result);
        return res.render("home");
        }


module.exports={
    handleusercreate,

}