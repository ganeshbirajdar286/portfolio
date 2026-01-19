import axios from "axios";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(name,email,message);

    const htmlContent = `
      <h2>New Portfolio Contact</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Ganesh Portfolio",
          email: process.env.BREVO_VERIFIED_SENDER, // Verified sender in Brevo
        },
        to: [
          { email: process.env.MY_PERSONAL_EMAIL } 
        ],
        subject: "New Portfolio Message 🚀",
        htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("send email");
    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });

  } catch (err) {
    console.log("Brevo API Error:", err.response?.data || err.message);

    return res.status(500).json({
      success: false,
      error: err.response?.data || err.message,
    });
  }
};
