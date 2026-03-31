import nodemailer from "nodemailer";
import { logger } from "./logger";

const KIM_EMAIL = "lsswellness73@icloud.com";
const BOOKING_URL = "https://lss-spa-wellness-llc.square.site/";

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

function htmlEmail(name: string, couponCode: string): string {
  const firstName = name.trim().split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to LSS Spa & Wellness</title>
</head>
<body style="margin:0;padding:0;background:#f9f7f3;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f7f3;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">

          <!-- Header band -->
          <tr>
            <td style="background:linear-gradient(135deg,#2c7a4b 0%,#3d9e60 100%);padding:32px 40px;text-align:center;">
              <p style="margin:0 0 6px 0;color:#a8f5c0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">
                🌿 Spring Skincare Sale
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;font-family:'Georgia',serif;">
                Welcome to LSS Spa &amp; Wellness!
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 20px 40px;">
              <p style="margin:0 0 18px 0;font-size:17px;color:#1a1a2e;line-height:1.6;">
                Hi ${firstName},
              </p>
              <p style="margin:0 0 16px 0;font-size:15px;color:#444;line-height:1.7;">
                Thank you for joining the LSS Spa &amp; Wellness community! Whether you're looking to
                reclaim your radiance with a <strong>Diamond Glow™ facial</strong> or start a body
                transformation with <strong>CryoSkin</strong>, I am so excited to help you reach your goals.
              </p>
              <p style="margin:0 0 16px 0;font-size:15px;color:#444;line-height:1.7;">
                As a former competitive bodybuilder in Los Angeles, I've seen firsthand how the right tools
                and discipline can change a physique. I've brought that same <em>'results-first'</em>
                philosophy to Menomonee Falls to help you look and feel your absolute best.
              </p>
            </td>
          </tr>

          <!-- Coupon block -->
          <tr>
            <td style="padding:0 40px 28px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:2px solid #86efac;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:24px 28px;text-align:center;">
                    <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#166534;font-family:Arial,sans-serif;">
                      🎁 Your Exclusive Welcome Gift
                    </p>
                    <p style="margin:0 0 14px 0;font-size:14px;color:#15803d;line-height:1.5;">
                      As a thank you for connecting with us, don't forget to use your code
                      below for <strong>20% off</strong> your first skincare purchase or service!
                    </p>
                    <p style="margin:0;font-family:'Courier New',Courier,monospace;font-size:34px;font-weight:900;color:#15803d;letter-spacing:6px;background:#dcfce7;display:inline-block;padding:12px 28px;border-radius:8px;border:2px dashed #4ade80;">
                      ${couponCode}
                    </p>
                    <p style="margin:10px 0 0 0;font-size:11px;color:#4ade80;font-family:Arial,sans-serif;">
                      Valid while supplies last &nbsp;·&nbsp; In-stock retail products only
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td style="padding:0 40px 32px 40px;text-align:center;">
              <p style="margin:0 0 16px 0;font-size:15px;color:#444;line-height:1.7;">
                Ready to book? You can view my real-time availability here:
              </p>
              <a href="${BOOKING_URL}"
                 style="display:inline-block;background:linear-gradient(135deg,#d4a017 0%,#f5c518 100%);color:#1a1a2e;font-weight:900;font-size:15px;text-decoration:none;padding:14px 36px;border-radius:50px;box-shadow:0 4px 14px rgba(212,160,23,0.4);font-family:Arial,sans-serif;letter-spacing:0.5px;">
                📅 Book My Appointment Now
              </a>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding:0 40px 36px 40px;border-top:1px solid #f0ede8;">
              <p style="margin:20px 0 4px 0;font-size:15px;color:#1a1a2e;line-height:1.6;">
                I can't wait to see you soon!
              </p>
              <p style="margin:0;font-size:15px;color:#1a1a2e;line-height:1.6;">
                Stay Radiant,<br />
                <strong>Kim Collins</strong><br />
                <span style="color:#666;font-size:13px;">Licensed Esthetician &amp; Founder, LSS Spa &amp; Wellness</span><br />
                <span style="color:#666;font-size:13px;">(833) 924-5620</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f7f3;padding:18px 40px;text-align:center;border-top:1px solid #e8e4df;">
              <p style="margin:0;font-size:11px;color:#999;font-family:Arial,sans-serif;line-height:1.6;">
                LSS Spa &amp; Wellness LLC · N89W16800 Appleton Avenue, Menomonee Falls, WI 53051<br />
                Inside Peace Yoga Studio &amp; Wellness Center<br />
                <a href="${BOOKING_URL}" style="color:#3d9e60;text-decoration:none;">View our booking page</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendWelcomeEmail({
  name,
  email,
  couponCode,
}: {
  name: string;
  email: string;
  couponCode: string;
}): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    logger.warn("EMAIL_USER or EMAIL_PASS not set — skipping welcome email");
    return;
  }

  const firstName = name.trim().split(" ")[0];
  try {
    await transporter.sendMail({
      from: `"Kim Collins — LSS Spa & Wellness" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🌿 Welcome to LSS Spa & Wellness, ${firstName}!`,
      html: htmlEmail(name, couponCode),
    });
    logger.info({ email, couponCode }, "Welcome email sent");
  } catch (err) {
    logger.error({ err, email }, "Failed to send welcome email");
  }
}

export async function sendLeadAlert({
  name,
  email,
  couponCode,
}: {
  name: string;
  email: string;
  couponCode: string;
}): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    logger.warn("EMAIL_USER or EMAIL_PASS not set — skipping lead alert");
    return;
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  try {
    await transporter.sendMail({
      from: `"LSS Spa Lead Alert" <${process.env.EMAIL_USER}>`,
      to: KIM_EMAIL,
      subject: `🌿 New Lead: ${name} claimed ${couponCode}`,
      text: [
        "New coupon claim received!",
        "",
        `Name:  ${name}`,
        `Email: ${email}`,
        `Code:  ${couponCode}`,
        `Time:  ${timestamp}`,
        "",
        "Log in to /admin-stats to view all claims.",
      ].join("\n"),
    });
    logger.info({ name, couponCode }, "Lead alert sent to Kim");
  } catch (err) {
    logger.error({ err }, "Failed to send lead alert");
  }
}
