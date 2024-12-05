
const moment = require('moment'); // Install moment.js for date manipulation

const {sendMail,mailOptions,transporter} = require("./newmail");

 

// Function to check and send reminders
function sendReminder(usn,returnDate) {
  
    //    mailOptions.to = `${usn}@msruas.ac.in`;
      mailOptions.to = `${usn}@sdmcujire.in`; 

    console.log(mailOptions);

    const currentDate = moment(); // Get current date
    const daysLeft = moment(returnDate).diff(currentDate, 'days');
    console.log(daysLeft); // Calculate days left

    if (daysLeft <= 3 && daysLeft > 0) {
        mailOptions.html= `Reminder: You have ${daysLeft} day(s) left to return the book.`;
        sendMail(transporter,mailOptions)
        console.log(`Reminder: You have ${daysLeft} day(s) left to return the book.`);


    } else if (daysLeft === 0) {
        mailOptions.html="Reminder: Today is the last day to return the book!";
        sendMail(transporter,mailOptions);
        console.log("Reminder: Today is the last day to return the book!");

    } else if (daysLeft < 0) {
        mailOptions.html="The return date has already passed!";
        sendMail(transporter,mailOptions)
        console.log("The return date has already passed!");
    }
}


// // Simulate a daily reminder check
// // setInterval(() => {
// //     sendReminder(issuedDate, returnDate);
// // }, 24 * 60 * 60 * 1000); // Runs every 24 hours (daily)




module.exports = {
    sendReminder,  

};