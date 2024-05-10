require('dotenv').config();

const accountSid = process.env.TWILIO_USER;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

// const sendSMS = async (grahakNaam, grahakMobile, messageBody,wk,loc) => {
const sendSMS = async (grahakNaam, grahakMobile, messageBody,wk) => {
    let msgOptions = {
        from: '+14582910778',
        to: "+91"+wk,
        body: messageBody
    };

    try {
        const message = await client.messages.create(msgOptions);
        console.log("SMS Safaltaa Purvak bheja gaya:", message.sid);
    } catch (error) {
        console.error("SMS bhejne mein error:", error);
    }
};

// Function to send SMS notification with customer name and mobile number
// const notifyWorker = (grahakNaam, grahakMobile,wk,loc) => {
const notifyWorker = (grahakNaam, grahakMobile,wk) => {
    // const messageBody = `नमस्ते! आपको एक नई बुकिंग मिली है।\n\nग्राहक नाम: ${grahakNaam}\nमोबाइल नंबर: ${grahakMobile}\nपता:${loc}\n\nकृपया ग्राहक से संपर्क करें और बुकिंग की पुष्टि करें।`;
    const messageBody = `नमस्ते! आपको एक नई बुकिंग मिली है।\n\nग्राहक नाम: ${grahakNaam}\nमोबाइल नंबर: ${grahakMobile}\n\nकृपया ग्राहक से संपर्क करें और बुकिंग की पुष्टि करें।`;
    // sendSMS(grahakNaam, grahakMobile, messageBody,wk,loc);
    sendSMS(grahakNaam, grahakMobile, messageBody,wk);
};

// Example usage
// const grahakNaam = "विजय";
// const grahakMobile = "+1234567890";
// notifyWorker(grahakNaam, grahakMobile);

module.exports = notifyWorker;