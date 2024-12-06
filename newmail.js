
const nodemailer = require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
    service : 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "crramchandrancentrallibrary@gmail.com",
      pass: "daxg yjti bbai vror",
    },
  });

  const mailOptions = {
    from: {
        name: "CRR CENTRAL LIBRARY",
        address: "crramchandrancentrallibrary@gmail.com"
    }, 
    to: "xxxxxxxxxxxx", // list of receivers
    subject: "BOOK REMINDER!!!", // Subject line
    text: "XXXXXXXXXXX", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  const sendMail = async (transporter,mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent succesfully");
    } catch (error) {
        console.error(error);
        
    }
    
  };
  

module.exports=
{
    sendMail,
    mailOptions,
    transporter
}