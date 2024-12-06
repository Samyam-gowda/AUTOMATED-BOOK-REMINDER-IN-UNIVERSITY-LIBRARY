
const moment = require('moment'); // Install moment.js for date manipulation

const {sendMail,mailOptions,transporter} = require("./newmail");

 

// Function to check and send reminders
function sendReminder(usn,returnDate) {
  
       mailOptions.to = `${usn}@msruas.ac.in`;
    //   mailOptions.to = `${usn}@sdmcujire.in`; 

    console.log(mailOptions);

    const currentDate = moment(); // Get current date
    const daysLeft = moment(returnDate).diff(currentDate, 'days');
    console.log(daysLeft); // Calculate days left

    if (daysLeft <= 3 && daysLeft > 0) {
        mailOptions.html= ` <br><br>This is a gentle reminder that the book(s) you borrowed from the "CRR CENTRAL LIBRARY" are due for return soon. 
        <br><br>Below are the details for your reference:
<br>
Book Title(s):
<br>
[Book Title 1]<br>
Due Date:  ${returnDate} <br><br>

We kindly request that you return the book(s) by the due date to avoid any late fees or inconvenience for other members waiting to borrow these titles.<br><br><br>

If you need to renew the book(s) or require assistance, feel free to reach out to us at crramchandrancentrallibrary@gmail.com.<br><br><br>

Reminder: You have ${daysLeft} day(s) left to return the book. <br>

Thank you for your attention, and we look forward to serving you again!<br><br>

Best regards,<br>
[Your Name]<br>
CRR CENTRAL LIBRARY [RUAS]<br>
crramchandrancentrallibrary@gmail.com

`;
        sendMail(transporter,mailOptions)
        console.log(`\n\nReminder: You have ${daysLeft} day(s) left to return the book.`);


    } else if (daysLeft === 0) {
        mailOptions.html="\n\nReminder: Today is the last day to return the book!";
        sendMail(transporter,mailOptions);
        console.log("Reminder: Today is the last day to return the book!");

    } else if (daysLeft < 0) {
        mailOptions.html="\n\nThe return date has already passed!";
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