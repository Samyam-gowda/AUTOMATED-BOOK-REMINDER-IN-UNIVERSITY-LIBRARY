const moment = require('moment');
const { sendMail, mailOptions, transporter } = require("./newmail");
const User = require("./model/user"); // Import the User model

async function sendReminder(usn) {
    try {
        const books = await User.find({ usn }); // Find all books issued to this USN

        if (!books.length) {
            console.log(`No books found for USN: ${usn}`);
            return;
        }

        const currentDate = moment();
        let bookTableRows = "";
        let returnDates = [];

        books.forEach(book => {
            const returnDate = moment(book.return).format("YYYY-MM-DD");
            bookTableRows += `<tr><td>${book.title}</td><td>${returnDate}</td></tr>\n`;
            returnDates.push(moment(book.return));
        });

        const minReturnDate = moment.min(returnDates); // Get the earliest due date
        const daysLeft = minReturnDate.diff(currentDate, 'days');

        mailOptions.to = `${usn}@msruas.ac.in`;
        mailOptions.html = `
            <br><br>
            <p>This is a gentle reminder that the book(s) you borrowed from the <strong>CRR CENTRAL LIBRARY</strong> are due for return soon.</p>
            
            <p><strong>Below are the details for your reference:</strong></p>

            <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #007BFF; color: white;">
                        <th>Book Title</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    ${bookTableRows}
                </tbody>
            </table>

            <p><strong>Reminder:</strong> You have <strong>${daysLeft} day(s)</strong> left to return the book(s).</p>

            <p>If you need to renew the book(s), feel free to reach out to us at <a href="mailto:crramchandrancentrallibrary@gmail.com">crramchandrancentrallibrary@gmail.com</a>.</p>

            <p>Best regards,</p>
            <p><strong>CRR CENTRAL LIBRARY [RUAS]</strong><br>
            <a href="mailto:crramchandrancentrallibrary@gmail.com">crramchandrancentrallibrary@gmail.com</a></p>
        `;

        if (daysLeft <= 3 && daysLeft > 0) {
            sendMail(transporter, mailOptions);
            console.log(`Reminder sent: ${daysLeft} day(s) left to return the books.`);
        } else if (daysLeft === 0) {
            mailOptions.html += "<p style='color: red;'><strong>Reminder: Today is the last day to return the book(s)!</strong></p>";
            sendMail(transporter, mailOptions);
            console.log("Reminder: Today is the last day to return the book(s)!");
        } else if (daysLeft < 0) {
            mailOptions.html += "<p style='color: red;'><strong>The return date has already passed!</strong></p>";
            sendMail(transporter, mailOptions);
            console.log("The return date has already passed!");
        }
    } catch (error) {
        console.error("Error sending reminder:", error);
    }
}

module.exports = { sendReminder };
