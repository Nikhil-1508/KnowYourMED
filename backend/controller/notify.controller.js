import nodemailer from "nodemailer";
import cron from "node-cron";

const handleUserNotify = async (req, res) => {
  // Create the transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service provider
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password", // Use app passwords for Gmail if needed
    },
  });

  // Email options
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@gmail.com",
    subject: "Medicine Reminder",
    text: "This is a friendly reminder to take your medicines.",
  };

  // Function to send email
  const sendEmail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  };

  // Schedule emails at 8 AM, 2 PM, and 8 PM
  cron.schedule("0 8 * * *", () => {
    console.log("Sending email for 8 AM...");
    sendEmail();
  });

  cron.schedule("0 14 * * *", () => {
    console.log("Sending email for 2 PM...");
    sendEmail();
  });

  cron.schedule("0 20 * * *", () => {
    console.log("Sending email for 8 PM...");
    sendEmail();
  });
};

export default handleUserNotify;