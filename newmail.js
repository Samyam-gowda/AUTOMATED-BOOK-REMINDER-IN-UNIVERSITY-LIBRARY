const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service : 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "samyamgowda2003@gmail.com",
      pass: "pqsg uzbp hyhm vukm",
    },
  });

  const mailOptions = {
    from: {
        name: "Samyam Gowda",
        address: "samyamgowda2003@gmail.com"
    }, 
    to: "21ETCS002081@msruas.ac.in", // list of receivers
    subject: "Hello macha", // Subject line
    text: "Hello world? abdjbaacnjkabac ", // plain text body
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
  sendMail(transporter,mailOptions)