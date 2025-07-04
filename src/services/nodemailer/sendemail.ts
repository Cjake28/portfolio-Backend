// src/services/nodemailer/mail.service.ts
import { transporter } from "./config.email";
import { SEND_EMAIL_TEMPLATE } from "./templates.email";
import AppError from "../../utils/AppError";

export default async function SendEmail(
  name: string,
  email: string,
  message: string,
) {
  try {
    const result = await transporter.sendMail({
			from: `"Your App" <${process.env.nodemailerEmail}>`,
			to: process.env.GMAIL_USER,
			subject: `New message from ${name}`,
			html: SEND_EMAIL_TEMPLATE
				.replace("{name}", name)
        .replace("{email}", email)
				.replace("{message}", message
			),
    });
    return result;
  } catch (err) {
    console.error("Error sending  email:", err);
    throw new AppError("Failed to send email", 500);
  }
}
