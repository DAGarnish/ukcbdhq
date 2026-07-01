import nodemailer from "nodemailer";

export async function sendWaitlistEmail({
  name,
  email,
  interest,
}: {
  name: string;
  email: string;
  interest?: string | null;
}) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.EMAIL_FROM || '"UKCBDHQ" <no-reply@ukcbdhq.co.uk>';
  const adminRecipient = process.env.RECEIVER_EMAIL || "abhisespoudyal@gmail.com";

  if (!host || !port || !user || !pass) {
    console.warn("SMTP credentials are not fully configured in environment variables. Email sending skipped.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: parseInt(port),
    secure: port === "465", // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });

  // 1. Send confirmation email to subscriber (Premium Luxury Theme)
  const subscriberMailOptions = {
    from,
    to: email,
    subject: "UKCBDHQ — VIP Sourcing Invitation Request Received",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf8f5; margin: 0; padding: 40px 20px; color: #2d3b32;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; background-color: #0b1a13; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(11,26,19,0.08); border: 1px solid rgba(197, 168, 128, 0.2);">
          <!-- Header Logo Banner -->
          <tr>
            <td align="center" style="padding: 40px 40px 30px 40px; background-color: #0b1a13; border-bottom: 1px solid rgba(197, 168, 128, 0.15);">
              <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 24px; color: #c5a880; letter-spacing: 0.15em; font-weight: 300;">UKCBDHQ</span>
              <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 10px; color: #889a8e; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 6px;">Dermo-Cosmetic Laboratories</div>
            </td>
          </tr>
          <!-- Inner Body -->
          <tr>
            <td style="padding: 40px 40px 35px 40px; background-color: #faf8f5;">
              <h1 style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; color: #0b1a13; font-weight: 300; margin-top: 0; margin-bottom: 20px; line-height: 1.3;">Sourcing Invitation Confirmed</h1>
              
              <p style="font-size: 15px; line-height: 1.6; color: #3d4f43; margin-bottom: 24px;">
                Dear ${name},
              </p>
              
              <p style="font-size: 15px; line-height: 1.6; color: #3d4f43; margin-bottom: 28px;">
                We are pleased to confirm your invitation request for the launch allocation of UKCBDHQ. Our initial batches are strictly limited due to precise laboratory scheduling in Spain.
              </p>
              
              <!-- Priority Card Info -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3f0e8; border-radius: 4px; border: 1px solid rgba(197, 168, 128, 0.3); margin-bottom: 28px;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 10px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #8c7e6c; font-weight: 600;">Status</td>
                        <td style="padding-bottom: 10px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #8c7e6c; font-weight: 600; text-align: right;">Allocation Category</td>
                      </tr>
                      <tr>
                        <td style="font-family: Georgia, serif; font-size: 16px; color: #0b1a13;">VIP Priority Active</td>
                        <td style="font-family: Georgia, serif; font-size: 16px; color: #0b1a13; text-align: right; text-transform: capitalize;">${interest || "General Range"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 14px; line-height: 1.6; color: #566c5f; margin-bottom: 28px;">
                You will receive immediate email notification the moment our laboratory completes UK batch clearance and shipping is unlocked. 
              </p>

              <!-- Aesthetic CTA button decoration -->
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 10px;">
                <tr>
                  <td align="center" style="background-color: #c5a880; border-radius: 2px;">
                    <span style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; color: #0b1a13; font-weight: 600; text-decoration: none; padding: 12px 24px; display: inline-block; letter-spacing: 0.1em;">MEMBERSHIP PORTAL ACTIVATED</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer Section -->
          <tr>
            <td align="center" style="padding: 30px 40px; background-color: #0b1a13; border-top: 1px solid rgba(197, 168, 128, 0.15);">
              <p style="font-size: 11px; color: #889a8e; letter-spacing: 0.05em; line-height: 1.6; margin: 0 0 15px 0;">
                UKCBDHQ Laboratories — Spain & United Kingdom
              </p>
              <p style="font-size: 9px; color: #566c5f; line-height: 1.4; margin: 0; max-width: 380px;">
                This message is intended solely for registered launch waitlist members. If you did not request this invitation, please ignore this email.
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  };

  // 2. Send alert email to admin (Beautiful Match Theme)
  const adminMailOptions = {
    from,
    to: adminRecipient,
    subject: `[Lead] New Waitlist Sign-up: ${name}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf8f5; margin: 0; padding: 40px 20px; color: #2d3b32;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; background-color: #0b1a13; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(11,26,19,0.08); border: 1px solid rgba(197, 168, 128, 0.2);">
          <!-- Header Logo Banner -->
          <tr>
            <td align="center" style="padding: 30px 40px; background-color: #0b1a13; border-bottom: 1px solid rgba(197, 168, 128, 0.15);">
              <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 20px; color: #c5a880; letter-spacing: 0.15em; font-weight: 300;">UKCBDHQ LEAD REGISTRATION</span>
            </td>
          </tr>
          <!-- Inner Body -->
          <tr>
            <td style="padding: 40px 40px 35px 40px; background-color: #faf8f5;">
              <h1 style="font-family: Georgia, 'Times New Roman', serif; font-size: 20px; color: #0b1a13; font-weight: 300; margin-top: 0; margin-bottom: 24px; line-height: 1.3;">New Waitlist Request Received</h1>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3f0e8; border-radius: 4px; border: 1px solid rgba(197, 168, 128, 0.3); margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 14px; line-height: 1.6; color: #3d4f43;">
                      <tr>
                        <td width="35%" style="padding-bottom: 10px; font-weight: bold; color: #0b1a13;">Name:</td>
                        <td style="padding-bottom: 10px;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 10px; font-weight: bold; color: #0b1a13;">Email:</td>
                        <td style="padding-bottom: 10px; color: #0b1a13; font-weight: 600;">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 10px; font-weight: bold; color: #0b1a13;">Interest:</td>
                        <td style="padding-bottom: 10px; text-transform: capitalize;">${interest || "General Range"}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #0b1a13;">Timestamp:</td>
                        <td>${new Date().toLocaleString()}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer Section -->
          <tr>
            <td align="center" style="padding: 20px 40px; background-color: #0b1a13; border-top: 1px solid rgba(197, 168, 128, 0.15);">
              <p style="font-size: 10px; color: #889a8e; letter-spacing: 0.05em; margin: 0;">
                UKCBDHQ Auto-generated Administration Alert
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(subscriberMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    console.log(`Waitlist emails successfully sent for ${email}`);
  } catch (error) {
    console.error("Failed to send waitlist emails:", error);
  }
}
