// Assuming you have Node.js environment

const moment = require('moment'); // Install moment.js for date manipulation

// Example book data
const issuedDate = "2024-12-01"; // Book issued date (YYYY-MM-DD)
const returnDate = "2024-12-09 "; // Book return date (YYYY-MM-DD)

// Function to check and send reminders
function sendReminder(issuedDate, returnDate) {
    const currentDate = moment(); // Get current date
    const daysLeft = moment(returnDate).diff(currentDate, 'days');
    console.log(daysLeft); // Calculate days left

    if (daysLeft <= 3 && daysLeft > 0) {
        console.log(`Reminder: You have ${daysLeft} day(s) left to return the book.`);
    } else if (daysLeft === 0) {
        console.log("Reminder: Today is the last day to return the book!");
    } else if (daysLeft < 0) {
        console.log("The return date has already passed!");
    }
}

// Simulate a daily reminder check
// setInterval(() => {
//     sendReminder(issuedDate, returnDate);
// }, 24 * 60 * 60 * 1000); // Runs every 24 hours (daily)

setInterval(() => {
    sendReminder(issuedDate, returnDate);
    console.log("checking for every 30sec");
},10000); // Runs every 24 hours (daily)
