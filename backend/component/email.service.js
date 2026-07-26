import axios from "axios";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(name,email,message);
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Contact</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f7; font-family:'Segoe UI', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7; padding:30px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#4f46e5; padding:24px 32px;">
              <h1 style="margin:0; font-size:20px; color:#ffffff; font-weight:600;">
                🚀 New Portfolio Contact
              </h1>
              <p style="margin:4px 0 0; font-size:13px; color:#e0e7ff;">
                Someone reached out via your portfolio site
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.05em;">Name</p>
                    <p style="margin:4px 0 0; font-size:15px; color:#111827;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:16px; border-top:1px solid #e5e7eb; padding-top:16px;">
                    <p style="margin:0; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.05em;">Email</p>
                    <p style="margin:4px 0 0; font-size:15px;">
                      <a href="mailto:${email}" style="color:#4f46e5; text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="border-top:1px solid #e5e7eb; padding-top:16px;">
                    <p style="margin:0; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.05em;">Message</p>
                    <p style="margin:8px 0 0; font-size:15px; color:#111827; line-height:1.6; white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 32px;">
              <a href="mailto:${email}" style="display:inline-block; background-color:#4f46e5; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:14px; font-weight:600;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb; padding:16px 32px; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:#9ca3af;">
                Sent from your portfolio contact form • ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
