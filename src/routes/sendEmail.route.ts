import { Router } from "express";
import { sendMailController } from "../controller/sendEmail.controller";

const sendEmailRouter = Router();

sendEmailRouter.post("/send-email", sendMailController);

export default sendEmailRouter;