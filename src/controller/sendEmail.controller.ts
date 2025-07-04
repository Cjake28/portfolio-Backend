// src/controllers/mail.controller.ts
import { Request, Response, NextFunction } from "express";
import SendEmail from "../services/nodemailer/sendemail";
import AppError from "../utils/AppError";

/**
 * Controller to send an email using the mail.service
 * Expects `{ name, email, message }` in req.body
 */
export const sendMailController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, email, message } = req.body;

  // Basic field validation
  if (!name || !email || !message) {
    return next(new AppError("Name, email, and message are required.", 400));
  }

  try {
    const info = await SendEmail(name, email, message);

    res.status(200).json({
      status: "success",
      message: "Email sent successfully.",
      info,
    });
  } catch (error) {
    // Forward to global error handler
    next(error);
  }
};

