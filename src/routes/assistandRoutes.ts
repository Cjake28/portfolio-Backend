// routes/chat.js
import { Router, Request, Response, NextFunction } from "express";
import OpenAI from "openai";

import {handleChat} from "../controller/assistant.controller"

const assistantRouter = Router();

assistantRouter.post("/", handleChat)

export default assistantRouter;