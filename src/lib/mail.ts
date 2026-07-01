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

  // 1. Send confirmation email to subscriber
  const subscriberMailOptions = {
    from,
    to: email,
    subject: "UKCBDHQ — Sourcing Invitation Request Received",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf8f5; border: 1px solid #e6eae7; color: #222222;">
        <h2 style="font-family: Georgia, serif; color: #0b1a13; font-weight: 300;">Welcome to the VIP Sourcing List</h2>
        <p>Dear ${name},</p>
        <p>Thank you for requesting priority access to UKCBDHQ. Your request for our upcoming premium Spanish-sourced CBD topicals and patches launch has been logged.</p>
        <div style="margin: 20px 0; padding: 15px; background-color: #f0ede6; border-left: 3px solid #c5a880;">
          <strong>Interest Details:</strong><br />
          Category: ${interest || "General Sourcing Range"}<br />
          Status: VIP Priority Activated
        </div>
        <p>We will email you the moment our laboratory finishes UK batch registration clearance and inventory is allocated for dispatch.</p>
        <p style="font-size: 0.85em; color: #566c5f; border-top: 1px solid #e6eae7; padding-top: 15px; margin-top: 30px;">
          Warm regards,<br />
          <strong>UKCBDHQ Sourcing Team</strong><br />
          Sourced in Spain | Delivered to the UK
        </p>
      </div>
    `,
  };

  // 2. Send alert email to admin
  const adminMailOptions = {
    from,
    to: adminRecipient,
    subject: `[Lead] New Waitlist Sign-up: ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222222;">
        <h2>New VIP Waitlist Lead</h2>
        <p>A new visitor has requested priority launch access:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Product Interest:</strong> ${interest || "Not Specified"}</li>
          <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
        </ul>
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
