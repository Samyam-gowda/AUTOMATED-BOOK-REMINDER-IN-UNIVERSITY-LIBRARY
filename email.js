
const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or your preferred email service
  auth: {
    user: "samyamgowda2003@gmail.com", // Replace with your email
    pass: "samyampoco23", // Replace with your email password or app password
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: "samyamgowda2003@gmail.com", // Sender's email
      to : "21ETCS002081@msruas.ac.in", // Recipient's email
      subject:"hello", // Email subject
      text: "hello macha!", // Email content
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {sendEmail};
